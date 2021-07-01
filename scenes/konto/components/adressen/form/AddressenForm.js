import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRegisterCountries} from "../../../../../services/actions/registration";
import {addAddress, editAddress} from "../../../../../services/actions/address";

const {Option} = Select
const AddressenForm = ({back,appointment,editable,setShow}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRegisterCountries())
    }, [])
    const [contval, setContval] = useState("Select a country")
    const countriesData = useSelector(state => state.registration.countries)?.Data
    const handleCountryChange = (e) => {
        setContval(e)
        setFormData(prev => ({
            ...prev,
            country: e
        }))
    }
useEffect(()=>{
    if(Object.keys(editable).length !== 0){
        setFormData(prev=>({
            ...prev,
            name:editable.first_name,
            surname:editable.surname,
            addressLineOne:editable.address_line,
            road:editable.road,
            house:editable.house_number,
            plz:editable.postcode,
            ort:editable.place,
            country:editable.country
        }))
        setContval(editable.country)
    }
},[editable])
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        addressLineOne: "",
        road: '',
        house: "",
        plz: "",
        ort: "",
        country: ""
    })

    const [nameError, setNameError] = useState("")
    const [surnameError, setSurnameError] = useState("")
    const [addressLineOneError, setAddressLineOneError] = useState("")
    const [roadError, setRoadError] = useState("")
    const [houseNumberError, setHouseNumberError] = useState("")
    const [postCodeError, setPostCodeError] = useState("")
    const [ortError, setOrtError] = useState("")

    const handleValidation = e => {
        let re = /^[A-Za-z]+$/;
        let addressReg = /[,#-\/\s\!\@\$.....]/gi
        switch (e.target.name) {
            case "name" :
                e.target.value.length > 0 && e.target.value.length <= 16 && re.test(e.target.value) ?
                    (
                        console.log("valid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setNameError(false))
                    :
                    (
                        console.log("ïnvalid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setNameError(true)
                    )
                break;
            case "surname" :
                e.target.value.length > 0 && e.target.value.length <= 16 && re.test(e.target.value) ?
                    (
                        console.log("valid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setSurnameError(false))
                    :
                    (
                        console.log("ïnvalid Name"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setSurnameError(true)
                    )
                break;
            case "addressLineOne" :
                addressReg.test(e.target.value) >= 0 ? (
                        console.log("valid adrs"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setAddressLineOneError(false))
                    :
                    (
                        console.log("ïnvalid adrs"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setAddressLineOneError(true)
                    )
                break;
            case "road" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        console.log("valid road"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setRoadError(false))
                    :
                    (
                        console.log("ïnvalid road"),
                            setFormData(prev => ({
                                ...prev,
                                [e.target?.name]: e.target.value
                            })),
                            setRoadError(true)
                    )
                break;
            case "house" :
                e.target.value.length > 0 && e.target.value.length <= 16 && Number(e.target.value) ?
                    (
                        setFormData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setHouseNumberError(false))
                    :
                    (
                        setFormData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setHouseNumberError(true)
                    )
                break;
            case "plz":
                e.target.value.length > 0 ?
                    (
                        setFormData(prev => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        })),
                            setPostCodeError(false)

                    )
                    :
                    (
                        setFormData(prev => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        })),
                            setPostCodeError(true)
                    )
                break;
            case "ort":
                e.target.value.length > 0 ?
                    (
                        setFormData(prev => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        })),
                            setOrtError(false)

                    )
                    :
                    (
                        setFormData(prev => ({
                            ...prev,
                            [e.target.name]: e.target.value
                        })),
                            setOrtError(true)
                    )
                break;
            default:
                break;
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(Object.keys(editable).length !== 0){
            dispatch(editAddress(formData,appointment,editable.id))
            setFormData(
                {
                    name: "",
                    surname: "",
                    addressLineOne: "",
                    road: '',
                    house: "",
                    plz: "",
                    ort: "",
                    country: ""
                }
            )
            setContval("Select a country")
        }else{
            if ((!nameError && !surnameError && !roadError && !postCodeError && !ortError && !houseNumberError) &&
                (nameError !== "" && surnameError !== "" && roadError !== "" && postCodeError !== "" && ortError !== ""
                    && houseNumberError !== "" )
            ) {
                dispatch(addAddress(formData,appointment))
                setFormData(
                    {
                        name: "",
                        surname: "",
                        addressLineOne: "",
                        road: '',
                        house: "",
                        plz: "",
                        ort: "",
                        country: ""
                    }
                )
                setContval("select a country")
                setNameError("")
                setSurnameError("")
                setRoadError("")
                setPostCodeError("")
                setOrtError("")
                setHouseNumberError("")
                setAddressLineOneError("")
            }else {
                if(nameError === ""){
                    setNameError(true)
                }
                if(surnameError === ""){
                    setSurnameError(true)
                }
                if(roadError === ""){
                    setRoadError(true)
                }
                if(houseNumberError === ""){
                    setHouseNumberError(true)
                }
                if(postCodeError === ""){
                    setPostCodeError(true)
                }
                if(ortError === ""){
                    setOrtError(true)
                }
            }
        }
        setTimeout(()=>{
            setShow()
        },1000)

    }

    return (
        <div className={"add__address"}>
            <h2 className={"add__address__title"}>
                adresse ändern
            </h2>
            <p className={"add__address__text"}>
                bitte tragen sie ihre adressdaten ein und klicken sie auf &bdquo; speichern &rdquo;
            </p>
            <form action="#" onSubmit={(e)=>onSubmitHandler(e)}>
                <div className={`validation-field ${nameError ? "invalidInput" : ""}`} >
                    <input type="text" placeholder={"Vorname*"} name={"name"} value={formData.name}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={nameError ? {visibility: "visible"} : {visibility: "hidden"}}>Ungültiger Name</p>
                </div>
                <div className={`validation-field ${surnameError ? "invalidInput" : ""}`}>
                    <input type="text" placeholder={"Nachname*"} name={"surname"}
                           value={formData.surname}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={surnameError ? {visibility: "visible"} : {visibility: "hidden"}}>ungültiger Nachname</p>
                </div>
                <div className={`validation-field ${addressLineOneError ? "invalidInput" : ""}`}>
                    <input type="text" placeholder={"Adresszeile 1 (oder Firmenname)"} name={"addressLineOne"}
                           value={formData.addressLineOne}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={addressLineOneError ? {visibility: "visible"} : {visibility: "hidden"}}>
                        ungültiger Adresszeile
                    </p>
                </div>
                <div className={`validation-field ${roadError ? "invalidInput" : ""}`}>
                    <input type="text" placeholder={"Strasse*"} name={"road"}
                           value={formData.road}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={roadError ? {visibility: "visible"} : {visibility: "hidden"}}>
                        bitte füllen sie das pflitchfeld aus
                    </p>
                </div>
                <div className={`validation-field ${houseNumberError ? "invalidInput" : ""}`}>
                    <input type="text" placeholder={"Hausnummer*"} name={"house"}
                           value={formData.house}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={houseNumberError ? {visibility: "visible"} : {visibility: "hidden"}}>
                        ungültiger housenummer
                    </p>
                </div>
                <div className={`validation-field ${postCodeError ? "invalidInput" : ""} `}>
                    <input type="text" placeholder={"PLZ*"} name={"plz"}
                           value={formData.plz}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={postCodeError ? {visibility: "visible"} : {visibility: "hidden"}}>
                        bitte füllen sie das pflichtfeld aus!
                    </p>
                </div>
                <div className={`validation-field ${ortError ? "invalidInput" : ""} `}>
                    <input type="text" placeholder={"Ort*"} name={"ort"}
                           value={formData.ort}
                           onChange={(e) => handleValidation(e)}/>
                    <p style={ortError ? {visibility: "visible"} : {visibility: "hidden"}}>
                        bitte füllen sie das pflichtfeld aus!
                    </p>
                </div>
                <Select
                    defaultValue={"Select a country"}
                    onChange={handleCountryChange}
                    name="country"
                    style={{height: "5.92rem"}} value={contval}
                >
                    {countriesData?.map((e, i) => {
                        return (
                            <Option value={`${e.name}`} key={i}>{e.name}</Option>
                        )
                    })}
                </Select>
                <input type="submit" value={"Speichern"}/>
            </form>
            <div className={"zuruck_back_body_white"}>
                <button className={"zuruck_back"} onClick={back}>zurück zur übersicht</button>
            </div>
        </div>
    )
}

export default AddressenForm