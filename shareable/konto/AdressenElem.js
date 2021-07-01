import {useDispatch} from "react-redux";
import {deleteAddress} from "../../services/actions/address";
import {useEffect} from "react";

const AdressenElem = ({e,appointment,setEditable,setAppointment,setShowForm}) =>{
    const dispatch = useDispatch()
    const onDeleteHandler = (e) =>{
        dispatch(deleteAddress(e.id,appointment))
    }
    useEffect(()=>{
        setEditable({})
    },[])
    const editHandler = (e) =>{

        setEditable(e)
        setAppointment(appointment)
        setShowForm(true)
    }
    return(
            <div className={"konto__adressen__container__top__container__elem"}>
                <div className={"konto__adressen__container__top__container__elem__item"}>
                    <h5 className={"konto__adressen__container__top__container__elem__item--title"}>{e.first_name} {e.surname}</h5>
                    <p className={"konto__adressen__container__top__container__elem__item--titlebot"}>{e.address_line}</p>
                    <p>{e.road}</p>
                    <p>{e.place}</p>
                    <p>{e.country}</p>
                    <p className={"konto__adressen__container__top__container__elem__item--edit"} onClick={()=>editHandler(e)} >andern</p>
                    <p className={"konto__adressen__container__top__container__elem__item--delete"} onClick={()=>onDeleteHandler(e)}>loshchen</p>
                </div>
            </div>
    )
}

export default AdressenElem