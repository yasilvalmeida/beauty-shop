import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRegisterCountries } from "../../../../../services/actions/registration";
import {
  addAddress,
  editAddress,
} from "../../../../../services/actions/address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const { Option } = Select;
const AddressenForm = ({ back, appointment, editable, setShow }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const countriesData = useSelector(
    (state) => state.registration.countries
  )?.data;
  const { kontoPageTextData } = useSelector((state) => state.konto);

  const [countryVal, setCountryVal] = useState(
    kontoPageTextData?.address_form_country
  );
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    addressLineOne: "",
    road: "",
    house: "",
    plz: "",
    ort: "",
    country: "",
  });
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [addressLineOneError, setAddressLineOneError] = useState("");
  const [roadError, setRoadError] = useState("");
  const [houseNumberError, setHouseNumberError] = useState("");
  const [postCodeError, setPostCodeError] = useState("");
  const [ortError, setOrtError] = useState("");

  useEffect(() => {
    if (Object.keys(editable).length !== 0) {
      setFormData((prev) => ({
        ...prev,
        name: editable.first_name,
        surname: editable.surname,
        addressLineOne: editable.address_line,
        road: editable.road,
        house: editable.house_number,
        plz: editable.postcode,
        ort: editable.place,
        country: editable.country,
      }));
      setCountryVal(editable.country);
    }
  }, [editable]);
  useEffect(() => {
    dispatch(getRegisterCountries(lang));
  }, [lang]);

  const handleCountryChange = (e) => {
    setCountryVal(e);
    setFormData((prev) => ({
      ...prev,
      country: e,
    }));
  };
  const handleValidation = (e) => {
    let re = /^[A-Za-z]+$/;
    let addressReg = /[,#-\/\s\!\@\$.....]/gi;
    switch (e.target.name) {
      case "name":
        e.target.value.length > 0 &&
        e.target.value.length <= 16 &&
        re.test(e.target.value)
          ? (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setNameError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setNameError(true));
        break;
      case "surname":
        e.target.value.length > 0 &&
        e.target.value.length <= 16 &&
        re.test(e.target.value)
          ? (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setSurnameError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setSurnameError(true));
        break;
      case "addressLineOne":
        addressReg.test(e.target.value) >= 0
          ? (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setAddressLineOneError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setAddressLineOneError(true));
        break;
      case "road":
        e.target.value.length > 0 && e.target.value.length <= 16
          ? (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setRoadError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setRoadError(true));
        break;
      case "house":
        e.target.value.length > 0 &&
        e.target.value.length <= 16 &&
        Number(e.target.value)
          ? (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setHouseNumberError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target?.name]: e.target.value,
            })),
            setHouseNumberError(true));
        break;
      case "plz":
        e.target.value.length > 0
          ? (setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            })),
            setPostCodeError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            })),
            setPostCodeError(true));
        break;
      case "ort":
        e.target.value.length > 0
          ? (setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            })),
            setOrtError(false))
          : (setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            })),
            setOrtError(true));
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(editable).length !== 0) {
      dispatch(editAddress(formData, appointment, editable.id));
      setFormData({
        name: "",
        surname: "",
        addressLineOne: "",
        road: "",
        house: "",
        plz: "",
        ort: "",
        country: "",
      });
      setCountryVal(kontoPageTextData?.address_form_country);
    } else {
      if (
        !nameError &&
        !surnameError &&
        !roadError &&
        !postCodeError &&
        !ortError &&
        !houseNumberError &&
        nameError !== "" &&
        surnameError !== "" &&
        roadError !== "" &&
        postCodeError !== "" &&
        ortError !== "" &&
        houseNumberError !== ""
      ) {
        dispatch(addAddress(formData, appointment));
        setFormData({
          name: "",
          surname: "",
          addressLineOne: "",
          road: "",
          house: "",
          plz: "",
          ort: "",
          country: "",
        });
        setCountryVal(kontoPageTextData?.address_form_country);
        setNameError("");
        setSurnameError("");
        setRoadError("");
        setPostCodeError("");
        setOrtError("");
        setHouseNumberError("");
        setAddressLineOneError("");
        setTimeout(() => {
          setShow();
        }, 1000);
      } else {
        if (nameError === "") {
          setNameError(true);
        }
        if (surnameError === "") {
          setSurnameError(true);
        }
        if (roadError === "") {
          setRoadError(true);
        }
        if (houseNumberError === "") {
          setHouseNumberError(true);
        }
        if (postCodeError === "") {
          setPostCodeError(true);
        }
        if (ortError === "") {
          setOrtError(true);
        }
      }
    }
  };

  return (
    <div className={"add__address"}>
      <h2 className={"add__address__title"}>
        {kontoPageTextData?.adress_form_header}
      </h2>
      <p className={"add__address__text"}>
        {kontoPageTextData?.address_form_title}
      </p>
      <form action="#" onSubmit={(e) => onSubmitHandler(e)}>
        <div className={`validation-field ${nameError ? "invalidInput" : ""}`}>
          <input
            type="text"
            placeholder={`${kontoPageTextData?.address_form_placeholder_name}*`}
            name={"name"}
            value={formData.name}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              nameError ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_name}
          </p>
        </div>
        <div
          className={`validation-field ${surnameError ? "invalidInput" : ""}`}
        >
          <input
            type="text"
            placeholder={`${kontoPageTextData?.address_form_placeholder_surname}*`}
            name={"surname"}
            value={formData.surname}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              surnameError
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_surname}
          </p>
        </div>
        <div
          className={`validation-field ${
            addressLineOneError ? "invalidInput" : ""
          }`}
        >
          <input
            type="text"
            placeholder={
              kontoPageTextData?.address_form_placeholder_address_line_one
            }
            name={"addressLineOne"}
            value={formData.addressLineOne}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              addressLineOneError
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_address_line_one}
          </p>
        </div>
        <div className={`validation-field ${roadError ? "invalidInput" : ""}`}>
          <input
            type="text"
            placeholder={`${kontoPageTextData?.address_form_placeholder_address_line_two}*`}
            name={"road"}
            value={formData.road}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              roadError ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_address_line_two}
          </p>
        </div>
        <div
          className={`validation-field ${
            houseNumberError ? "invalidInput" : ""
          }`}
        >
          <input
            type="text"
            placeholder={`${kontoPageTextData?.address_form_placeholder_house_number}*`}
            name={"house"}
            value={formData.house}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              houseNumberError
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_house_number}
          </p>
        </div>
        <div
          className={`validation-field ${postCodeError ? "invalidInput" : ""} `}
        >
          <input
            type="text"
            placeholder={`${kontoPageTextData?.address_form_placeholder_post_code}*`}
            name={"plz"}
            value={formData.plz}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              postCodeError
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_post_code}
          </p>
        </div>
        <div className={`validation-field ${ortError ? "invalidInput" : ""} `}>
          <input
            type="text"
            placeholder={`${kontoPageTextData?.address_form_placeholder_location}*`}
            name={"ort"}
            value={formData.ort}
            onChange={(e) => handleValidation(e)}
          />
          <p
            style={
              ortError ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            {kontoPageTextData?.address_form_warning_location}
          </p>
        </div>
        <Select
          defaultValue={kontoPageTextData?.address_form_country}
          onChange={handleCountryChange}
          name="country"
          style={{ height: "5.92rem" }}
          value={countryVal}
        >
          {countriesData?.map((e, i) => {
            return (
              <Option value={`${e.name}`} key={i}>
                {e.name}
              </Option>
            );
          })}
        </Select>
        <input type="submit" value={kontoPageTextData?.address_form_submit} />
      </form>
      <div className={"zuruck_back_body_white"}>
        <button className={"zuruck_back"} onClick={back}>
          <FontAwesomeIcon icon={faArrowLeft} className={"head-search-icon"} />{" "}
          {kontoPageTextData?.adress_back}
        </button>
      </div>
    </div>
  );
};

export default AddressenForm;
