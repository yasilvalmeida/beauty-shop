import { Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react"
import { Tooltip,notification } from 'antd';
import { postRegistration } from "../../../../services/actions/registration";
import moment from "moment";
import { postNewsletter, setNewsLetters } from "../../../../services/actions/newsletter";

const { Option } = Select;

const RegistrationForm = ({textData}) => {
    //const countriesData = useSelector(state => state.registration.countries.data);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dispatch = useDispatch();
    const success = useSelector(state => state.registration.success);

    const [registerData, setRegisterData] = useState({
      name: "",
      surname: "",
      email: "",
      gender: "",
      password: "",
      repeatPassword: "",
      country: "",
      subscribe: "",
      day: "",
      month: "",
      year: "",
    });
    const [nameError, setNameError] = useState("");
    const [surNameError, setSurNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [repeatEmailError, setRepeatEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [robot, setRobot] = useState("");
    const [robotTollTip, setRobotToolTip] = useState("");
    const scroll = useRef();
    const [year, setYear] = useState([]);
    const [day, setDay] = useState([]);
    /* const [contval, setContval] = useState("Select a country"); */
    const [yearval, setYearval] = useState("Geburtsjahr");
    const [monthval, setMonthval] = useState("Geburtsmonat");
    const [dayval, setDayval] = useState("Geburtstag");
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(true);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(true);
    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        if (robot === "") {
            setRobotToolTip(false)
        } else setRobotToolTip(!robot)
    }, [robot]);
    useEffect(() => {
       if(!success?.response){
           if (success?.response?.data?.message[0]?.messages[0]?.message !== undefined &&
               success?.response?.data?.message[0]?.messages[0]?.message !== null) {
               openNotificationWithIcon("error")
           } else if (success) {
               openNotificationWithIcon("success")
           }
       }
    }, [success]);
    useEffect(() => {
      let currentYear = new Date().getFullYear() - 18;
      let yearQnt = 99;
      let arr = [];
      for (let y = 0; y < yearQnt; y++) {
        let date = new Date(`${currentYear}`);
        arr.push(moment(date).format("YYYY"));
        setYear([...arr]);
        currentYear--;
      }

      let days = new Date(
        moment(new Date()).format("YYYY"),
        moment().month("Jan").format("MM"),
        0
      ).getDate();
      const arr2 = [];
      for (let d = 1; d <= days; d++) {
        arr2.push(d);
        setDay([...arr2]);
      }
    }, []);
    useEffect(() => {
      const arr = [];
      if (registerData.month === "" && registerData.year?.length > 0) {
        setRegisterData((prev) => ({
          ...prev,
          month: "January",
        }));
      }
      if (registerData.year === "" && registerData.month?.length > 0) {
        setRegisterData((prev) => ({
          ...prev,
          year: "2021",
        }));
      }
      let days = new Date(
        `${registerData.year}`,
        moment().month(`${registerData.month}`).format("MM"),
        0
      ).getDate();
      for (let d = 1; d <= days; d++) {
        arr.push(d);
        setDay([...arr]);
      }
    }, [registerData.month, registerData.year]);
    useEffect(() => {
      if (yes) {
        setSubscribe(true);
      } else {
        setSubscribe(false);
      }
    }, [yes, no]);

    const openNotificationWithIcon = type => {
        notification[type]({
            message: '',
            description: type === "success" ? "Please verify your email" : success?.response?.data?.message[0]?.messages[0]?.message
        });
    };
    const handleValidation = (e) => {
        e.persist();
        switch (e.target.name) {
            case "name" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setNameError(false))
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setNameError(true)
                    )
                break;
            case "surname" :
                e.target.value.length > 0 && e.target.value.length <= 16 ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setSurNameError(false))

                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setSurNameError(true)
                    )
                break;
            case "email" :
                e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setEmailError(false)
                    )
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setEmailError(true)
                    )
                break;
            case "repeatEmail" :
                e.target.value === registerData.password ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            repeatPassword: e.target.value
                        })),
                            setRepeatEmailError(false)
                    )
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            repeatPassword: e.target.value
                        })),
                            setRepeatEmailError(true)
                    )
                break;
            case "password" :
                e.target.value.length >= 8 ?
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setPasswordError(false)
                    )
                    :
                    (
                        setRegisterData(prev => ({
                            ...prev,
                            [e.target?.name]: e.target.value
                        })),
                            setPasswordError(true)
                    )
                break;
            default :
                break
        }
    }
    /* const handleCountryChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            country: e
        }));
        setContval(e)
    } */
    const handleDayChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            day: e
        }));
        setDayval(e)
    }
    const handleYearChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            year: e
        }));
        setYearval(e)
    }
    const handleMonthChange = (e) => {
        setRegisterData(prev => ({
            ...prev,
            month: e
        }));
        setMonthval(e)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if ((!emailError && !repeatEmailError && !passwordError && !nameError && !surNameError && emailError !== "") &&
            repeatEmailError !== "" && passwordError !== "" && nameError !== "" && surNameError !== "" && emailError !== ""
            && robot) {

            dispatch(
              postRegistration({
                firstName: registerData.name,
                lastName: registerData.surname,
                email: registerData.email,
                gender: female ? "female" : "male",
                password: registerData.password,
                subscribe: subscribe,
                birthdayAt:
                  moment(
                    new Date(
                      `${registerData.year}`,
                      moment().month(registerData.month).format("MM"),
                      registerData.day
                    )
                  ).format("YYYY-MM-DD") + "T00:00:00Z",
                //country: registerData.country,
              })
            );
            setRegisterData({
                name: "",
                surname: "",
                email: "",
                gender: "",
                repeatPassword: "",
                password: "",
                //country: "",
                day: "",
                month: "",
                year: ""
            })
            setRobot("");
            setRepeatEmailError("");
            setPasswordError("");
            setEmailError("");
            setSurNameError("");
            setNameError("");
            //setContval("Select a country");
            setYearval("Geburtsjahr");
            setMonthval("Geburtsmonat");
            setDayval("Geburtstag");
            setMale(false);
            setFemale(true);
            setNo(true);
            setYes(false);
            setSubscribe(false);
        } else {
            scroll.current.scrollIntoView()
            if (nameError === "") {
                setNameError(true)
            }
            if (emailError === "") {
                setEmailError(true)
            }
            if (surNameError === "") {
                setSurNameError(true)
            }
            if (passwordError === "") {
                setPasswordError(true)
            }
            if (repeatEmailError === "") {
                setRepeatEmailError(true)
            }
            if (robot === "") {
                setRobot(false)
            }
        }
    }

    return (
      <div className={"registration__form__container"}>
        <h2 className={"registration__form__container__title"} ref={scroll}>
          {textData?.text_top_of_form}
        </h2>
        <form
          action=""
          className={"registration__form__container__form"}
          onSubmit={onSubmit}
        >
          <Tooltip
            title={"Name is required"}
            color={"red"}
            visible={nameError ? true : false}
            placement="bottomRight"
          >
            <input
              name={"name"}
              type="text"
              placeholder={"Vorname*"}
              value={registerData.name}
              className={nameError ? "input-error" : ""}
              maxLength={16}
              onChange={handleValidation}
            />
          </Tooltip>
          <Tooltip
            title={"Surname is required"}
            color={"red"}
            visible={surNameError ? true : false}
            placement="bottomRight"
          >
            <input
              name={"surname"}
              type="text"
              placeholder={"Nachname*"}
              className={surNameError ? "input-error" : ""}
              maxLength={16}
              value={registerData.surname}
              onChange={handleValidation}
            />
          </Tooltip>
          <Tooltip
            title={"Please enter email"}
            color={"red"}
            visible={emailError ? true : false}
            placement="bottomRight"
          >
            <input
              name={"email"}
              type="email"
              placeholder={"E-Mail-Adresse*"}
              className={emailError ? "input-error" : ""}
              value={registerData.email}
              onChange={handleValidation}
            />
          </Tooltip>
          <Tooltip
            title={"Please enter password"}
            color={"red"}
            visible={passwordError ? true : false}
            placement="bottomRight"
          >
            <input
              name={"password"}
              type="password"
              placeholder={"Passwort*"}
              value={registerData.password}
              className={passwordError ? "input-error" : ""}
              onChange={handleValidation}
            />
          </Tooltip>
          <Tooltip
            title={"Please repeat password"}
            color={"red"}
            visible={repeatEmailError ? true : false}
            placement="bottomRight"
          >
            <input
              name={"repeatEmail"}
              type="password"
              value={registerData.repeatPassword}
              className={repeatEmailError ? "input-error" : ""}
              placeholder={"Passwort bestätigen*"}
              onChange={handleValidation}
            />
          </Tooltip>
          {/* <Select
            defaultValue={"Select a country"}
            onChange={handleCountryChange}
            name="country"
            style={{ height: "5.92rem" }}
            value={contval}
          >
            {countriesData?.map((e, i) => {
              return (
                <Option value={`${e.id}`} key={i}>
                  {e.name}
                </Option>
              );
            })}
          </Select> */}
          <div className={"registration__form__container__form--birth"}>
            <Select
              defaultValue="Geburtsjahr"
              value={yearval}
              onChange={handleYearChange}
              style={{ height: "5.92rem" }}
            >
              {year.map((e, i) => {
                return (
                  <Option value={e} key={i}>
                    {e}
                  </Option>
                );
              })}
            </Select>
            <Select
              defaultValue="Geburtsmonat"
              value={monthval}
              onChange={handleMonthChange}
              style={{ height: "5.92rem" }}
            >
              {monthNames.map((e, i) => {
                return (
                  <Option value={e} key={i}>
                    {e}
                  </Option>
                );
              })}
            </Select>
            <Select
              defaultValue="Geburtstag"
              value={dayval}
              onChange={handleDayChange}
              style={{ height: "5.92rem" }}
            >
              {day.map((e, i) => {
                return (
                  <Option value={e} key={i}>
                    {e}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className={"registration__form__container__form__newsletter"}>
            <p>Geschlecht</p>
            <div
              className={
                "registration__form__container__form__newsletter__item"
              }
            >
              <div
                className={
                  "registration__form__container__form__newsletter__item__body"
                }
              >
                <input
                  id={"female"}
                  type="radio"
                  name={"gender"}
                  value={"female"}
                  className="newsLetter__container__action__form--gender"
                  checked={female}
                  onChange={(e) => {
                    setFemale(e.target.checked);
                    setMale(!e.target.checked);
                  }}
                />
                <label htmlFor="female">Weiblich</label>
              </div>
              <div
                className={
                  "registration__form__container__form__newsletter__item__body"
                }
              >
                <input
                  id={"male"}
                  type="radio"
                  name={"gender"}
                  value={"male"}
                  className="newsLetter__container__action__form--gender"
                  checked={male}
                  onChange={(e) => {
                    setMale(e.target.checked);
                    setFemale(!e.target.checked);
                  }}
                />
                <label htmlFor="male">Männlich</label>
              </div>
            </div>
          </div>
          <div className={"registration__form__container__form__newsletter"}>
            <p>
              Möchten Sie Neuigkeiten und exklusive Angebote von Das Parfum &
              Beauty per E-Mail erhalten?
            </p>
            <div
              className={
                "registration__form__container__form__newsletter__item"
              }
            >
              <div
                className={
                  "registration__form__container__form__newsletter__item__body"
                }
              >
                <input
                  id={"yes"}
                  type="radio"
                  name={"newsletter"}
                  value={"yes"}
                  className="newsLetter__container__action__form--gender"
                  checked={yes}
                  onChange={(e) => {
                    setYes(e.target.checked);
                    setNo(!e.target.checked);
                  }}
                />
                <label htmlFor="yes">Ja, bitte!</label>
              </div>
              <div
                className={
                  "registration__form__container__form__newsletter__item__body"
                }
              >
                <input
                  id={"no"}
                  type="radio"
                  name={"newsletter"}
                  value={"no"}
                  className="newsLetter__container__action__form--gender"
                  checked={no}
                  onChange={(e) => {
                    setNo(e.target.checked);
                    setYes(!e.target.checked);
                  }}
                />
                <label htmlFor="no">Nein, danke.</label>
              </div>
            </div>
            <p>
              Mehr zu unseren <span>E-Mails</span> und{" "}
              <span>Datenschutzbestimmungen.</span>
            </p>
          </div>
          <Tooltip
            title={"Select if you are not a robot"}
            color={"red"}
            visible={robotTollTip ? true : false}
            placement="bottomRight"
          >
            <div
              className={`registration__form__container__form__robot ${
                robotTollTip && "bordered-robot"
              }`}
            >
              <input
                id={"yes"}
                type="checkbox"
                name={"gender"}
                value={"male"}
                checked={robot === "" ? false : robot}
                className="newsLetter__container__action__form--gender"
                onChange={(e) => {
                  setRobot(e.target.checked);
                }}
              />
              <label htmlFor="yes">Ich bin kein Roboter</label>
            </div>
          </Tooltip>
          <input
            type="submit"
            value={"Anmelden"}
            className={"registration__form__container__form__submit"}
          />
          <p className={"registration__form__container__form__bottxt"}>
            Mit Ihrer Registrierung stimmen Sie den{" "}
            <span>Nutzungsbedingungen</span> von Das Parfum & Beauty zu.
          </p>
        </form>
      </div>
    );
}

export default RegistrationForm