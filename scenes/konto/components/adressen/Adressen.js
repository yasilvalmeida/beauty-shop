import AdressenTitle from "../../../../shareable/konto/AdressenTitle";
import AdressenElem from "../../../../shareable/konto/AdressenElem";
import AddressenForm from "./form/AddressenForm";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getBillingAddress, getDeliveryAddress} from "../../../../services/actions/address";
import {Space, Spin} from "antd";


const Adressen = () => {
    const titleOne = "Rechnungsadressen"
    const titleTwo = "Lieferadressen"
    const dispatch = useDispatch()

    const [showForm, setShowForm] = useState(false)
    const [appointment, setAppointment] = useState("")
    const billingData = useSelector(state => state.address.billingAddresses)
    const deliveryData = useSelector(state => state.address.deliveryAddresses)
    const {billingAddressesLoaded, deliveryAddressesLoaded} = useSelector(state => state.address)
    const [editableData, setEditableData] = useState({})

    useEffect(() => {
        if (!showForm) {
            dispatch(getBillingAddress())
            dispatch(getDeliveryAddress())
        }
    }, [showForm])
    const handleShow = (e) => {
        setShowForm(true)
        setAppointment(e)
    }

    const handleClose = () => {
        setShowForm(false)
    }
    const router = useRouter()

    return (
        <>
            {billingAddressesLoaded || deliveryAddressesLoaded ? (
                <div className={"loader__body"}>
                    <Space size="middle">
                        <Spin size="large"/>
                    </Space>
                </div>
            ) : (<div className={"konto__adressen__container"}>
                <p className={"page_name"}>Adressen</p>
                {!showForm ?
                    <>
                        <div className={"konto__adressen__container__top"}>
                            <AdressenTitle title={titleOne}/>

                            <div className={"konto__adressen__container__top__container"}>
                                {billingData.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <AdressenElem e={e} appointment={"billing"} setEditable={setEditableData}
                                                          setAppointment={setAppointment} setShowForm={setShowForm}/>
                                        </div>
                                    )
                                })}
                                <div className={"konto__adressen__container__top__add"}>
                                    <div className={"konto__adressen__container__top__add__elem"}
                                         onClick={() => handleShow("billing")}>
                                        <p>+</p>
                                    </div>
                                    <p className={"konto__adressen__container__top__add__link"}
                                       onClick={handleShow}>hinzufügen</p>
                                </div>
                            </div>
                        </div>
                        <div className={"konto__adressen__container__bottom"}>
                            <AdressenTitle title={titleTwo}/>
                            <div className={"konto__adressen__container__top__containerbot"}>
                                {deliveryData.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <AdressenElem e={e} appointment={"delivery"} setEditable={setEditableData}
                                                          setAppointment={setAppointment} setShowForm={setShowForm}/>
                                        </div>
                                    )
                                })}
                                <div className={"konto__adressen__container__top__add"}>
                                    <div className={"konto__adressen__container__top__add__elem"}
                                         onClick={() => handleShow("delivery")}>
                                        <p>+</p>
                                    </div>
                                    <p className={"konto__adressen__container__top__add__link"}
                                       onClick={handleShow}>hinzufügen</p>
                                </div>
                            </div>
                        </div>
                        <div className={"zuruck_back_body"}>
                            <button className={"zuruck_back"} onClick={() => router.push("/konto/main")}>zurück zur
                                übersicht
                            </button>
                        </div>
                    </>
                    : <AddressenForm back={handleClose} appointment={appointment} editable={editableData} setShow={handleClose}/>
                }
            </div>)

            }

        </>
    )
}

export default Adressen