import React, {useState} from "react";
import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRenderModal} from "../../../../services/actions/homepage__stable";
import {postNewsletter} from "../../../../services/actions/newsletter";

const RenderModal = ({isModalVisible, setIsModalVisible}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRenderModal());
    }, []);

    const newsReports = useSelector((state) => state.navbar.renderModalData);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [typed,setTyped] = useState("")

    const onCheckedHandler = () => {
        setChecked(!checked)
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        const newsletter = {First_name: "", Surname: "", Gender: ""}
        if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            newsletter.Email = email
            dispatch(postNewsletter(newsletter))
            setEmail("")
            setTyped("")
        }
    }

    const onChangeHandler = e => {
        if (e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setEmailError(true)
        } else setEmailError(false)
        setEmail(e.target.value)

        if(e.target.value.length === 0){
            setTyped(false)
        }else setTyped(true)
    }

    return (
        <Modal
            title={newsReports?.title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1200}
            wrapClassName={"on__render__modal"}
            footer={null}
        >
            <div className={"render__modal__content"}>
                <p className={"render__modal__content__toptxt"}>
                    {newsReports?.subtitle}
                </p>
                <div className={"render__modal__content__img"}>
                    <img src={newsReports?.images?.url} alt="/anzeige-final.jpg"/>
                </div>
                <div className={"render__modal__content__subscribe"}>
                    <form action="#" onSubmit={(e) => onSubmitHandler(e)}>
                        <div className={"email__subscription__popup"}>
                            <input type="email"
                                   className={`${!emailError && email !== "" ? "no-valid" : "valid"}`}
                                   placeholder={"Email adresse"} onChange={(e) => onChangeHandler(e)}/>
                            <button type="submit">Jetzt anmelden</button>
                        </div>
                        <div className={"privacy_popup container"}>
                            <input type="checkbox" checked={checked} onChange={onCheckedHandler}/>
                            <span className="checkmark" onClick={onCheckedHandler}></span>
                            <label htmlFor="privacy">
                                {newsReports?.privacy}
                            </label>
                        </div>
                    </form>
                </div>
                <div className={"render__modal__content__bottom"}>
                    <p>{newsReports?.text_1}</p>
                    <p>{newsReports?.text_2}</p>
                </div>
            </div>

        </Modal>
    );
};

export default React.memo(RenderModal);
