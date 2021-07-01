import {useDispatch} from "react-redux";
import {useState, useRef} from "react"
import {Tooltip} from 'antd';
import {postContact} from "../../../../../../services/actions/contact";

const FormBody = () => {
    const dispatch = useDispatch()
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        orderId: "",
        message: "",
        privacyPolicy: false,
        copyTo: false
    })
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [subjectError, setSubjectError] = useState("")
    const [messageError, setMessageError] = useState("")
    const [orderIdError, setOrderIdError] = useState("")
    const [copyError, setCopyError] = useState("")
    const [privacyError, setPrivacyError] = useState("")

    const handleValidation = (e) => {
        e.persist();
        switch (e.target.name) {
            case "name" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setNameError(false))
                    :
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setNameError(true)
                    )
                break;
            case "subject" :
                e.target.value.length > 0 ?
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setSubjectError(false))
                    :
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setSubjectError(true)
                    )
                break;
            case "message" :
                e.target.value.length > 150 ?
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setMessageError(false))
                    :
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setMessageError(true)
                    )
                break;
            case "orderId" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setOrderIdError(false))
                    :
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setOrderIdError(true)
                    )
                break;
            case "email" :
                e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    ?
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setEmailError(false)
                    )
                    :
                    (
                        setContactData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setEmailError(true)
                    )
                break;
            default :
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ((!emailError && !subjectError && !privacyError && !messageError)
            && emailError !== "" && subjectError !== "" &&
            privacyError !== "" && messageError !== "") {
            dispatch(postContact({
                name: contactData.name,
                email: contactData.email,
                subject: contactData.subject,
                Order_ID: contactData.orderId,
                message: contactData.message,
                copy_to_me: contactData.copyTo,
                privacy: contactData.privacyPolicy
            }))
            setContactData({
                name: "",
                email: "",
                subject: "",
                orderId: "",
                message: "",
                privacyPolicy: false,
                copyTo: false
            })
            setEmailError("")
            setSubjectError("")
            setPrivacyError("")
            setMessageError("")
        } else {
            scroll.current.scrollIntoView()
            if (emailError === "") {
                setEmailError(true)
            }
            if (subjectError === "") {
                setSubjectError(true)
            }
            if (messageError === "") {
                setMessageError(true)
            }
            if (privacyError === "") {
                setPrivacyError(true)
            }
        }
    }
    const handleCopyChange = (e) => {
        setContactData(prev => ({
            ...prev,
            copyTo: e.target.checked
        }));
        setCopyError(!e.target.checked)
    }
    const handlePrivacyChange = (e) => {
        setContactData(prev => ({
            ...prev,
            privacyPolicy: e.target.checked
        }));
        setPrivacyError(!e.target.checked)
    }
    const scroll = useRef()
    return (
        <div className={"contact__form__body__container__all"}>
            <form action="#" className={"contact__form__body__container__all__form"} onSubmit={handleSubmit}>
                <input type="text" placeholder={"Name (Optional)"} name={"name"} onChange={handleValidation}
                       ref={scroll}
                       value={contactData?.name}/>
                <Tooltip title={"Email is required"} color={"red"} visible={emailError ? true : false}
                         placement="bottomRight">
                    <input
                        type="email" placeholder={"E-Mail*"} name={"email"}
                        onChange={handleValidation} value={contactData?.email}
                        className={emailError ? "input-error" : null}
                    />
                </Tooltip>
                <Tooltip title={"Subject is required"} color={"red"} visible={subjectError ? true : false}
                         placement="bottomRight">
                    <input type="text" placeholder={"Betreff*"} name={"subject"} onChange={handleValidation}
                           className={subjectError ? "input-error" : null} value={contactData?.subject}/>
                </Tooltip>
                <input type="text" placeholder={"Auftrags-ID (optional)"} name={"orderId"} onChange={handleValidation}
                       value={contactData?.orderId}/>
                <div className={"contact__form__body__container__all__form__textarea"}>
                    <Tooltip title={"message is rquired and must contain at least 150 characters"} color={"red"}
                             visible={messageError ? true : false} placement="bottomRight">
                         <textarea name="message" id="message" cols="30" rows="15" placeholder={"Nachricht*"}
                                   onChange={handleValidation} value={contactData?.message}
                                   className={messageError ? "input-error" : null}
                         />
                    </Tooltip>

                    <p className={"contact__form__body__container__all__form__textarea--reqtxt"}>*Hierbei handelt es
                        sich um ein Pflichtfeld.</p>
                </div>
                <div className={"contact__form__body__container__all__form__checkbox"}>
                    <div className={"registration__form__container__form__newsletter__item__body"}>
                        <input
                            id={"yes"}
                            type='checkbox'
                            name={"gender"}
                            value={"male"}
                            checked={contactData.copyTo}
                            className='newsLetter__container__action__form--gender'
                            onChange={handleCopyChange}
                        />
                        <label htmlFor="yes">Kopie an mich</label>
                    </div>
                    <div className={"registration__form__container__form__newsletter__item__body"}>
                        <Tooltip title={"You didn`t agree with our privacy and policy"} color={"red"}
                                 visible={privacyError ? true : false} placement="bottomRight">
                            <input
                                id={"yes"}
                                type='checkbox'
                                name={"gender"}
                                value={"male"}
                                checked={contactData.privacyPolicy}
                                className='newsLetter__container__action__form--gender'
                                onChange={handlePrivacyChange}
                            />
                        </Tooltip>
                        <label htmlFor="yes">
                            Hiermit bestätige ich, dass ich die
                            <span>{""}Daten­schutz­erklärung</span> gelesen habe.*
                        </label>
                    </div>
                </div>
                <input type="submit" value={"Absenden"}
                       className={"contact__form__body__container__all__form__submit"}/>
            </form>
        </div>
    )
}

export default FormBody