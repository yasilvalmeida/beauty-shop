import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postNewsletter,
  setNewsLetters,
} from "../../services/actions/newsletter";
import { notification, Tooltip } from "antd";
import { getNewsletterText } from "../../services/actions/homepage__stable";

const NewsletterRep = ({ padding }) => {
  const dispatch = useDispatch();
  const [newsLetter, setNewsLetter] = useState({
    First_name: "",
    Surname: "",
    Gender: "",
    Email: "",
  });
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const success = useSelector((state) => state.newsletter.success);

  const [suc, setSuc] = useState(null);
  useEffect(() => {
    dispatch(getNewsletterText());
  }, []);

  const textData = useSelector((state) => state.navbar.newsletterText);

  useEffect(() => {
    switch (success?.message) {
      case false:
        openNotificationWithIcon("error");
        break;
      case true:
        openNotificationWithIcon("success");
    }
    dispatch(setNewsLetters(null));
  }, [success]);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Newsletter",
      description:
        type === "success"
          ? "Thank you for subscription"
          : "You already subscribed to newsletter",
    });
  };
  const [emailSuccess, setEmailSuccess] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      newsLetter.Email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      dispatch(postNewsletter(newsLetter));
      setChecked(false);
      setChecked2(false);
      setChecked3(false);
      setEmailSuccess("");
      setNewsLetter({ First_name: "", Surname: "", Gender: "", Email: "" });
    } else setEmailSuccess(true);
  };
  return (
    <>
      <div className="newsLetter__container">
        <div className="newsLetter__container__header">
          <h2 className="newsLetter__container__header--title">Newsletter</h2>
          <p className="newsLetter__container__header--info">
            {textData[0]?.text}
          </p>
        </div>
        <div className="newsLetter__container__action">
          <form
            action="#"
            className="newsLetter__container__action__form"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name={"name"}
              placeholder={"Vorname"}
              className="newsLetter__container__action__form--name"
              value={newsLetter.First_name}
              onChange={(e) => {
                const val = e.target.value;
                setNewsLetter((prev) => ({
                  ...prev,
                  First_name: val,
                }));
              }}
            />
            <input
              type="lastname"
              name={"lastname"}
              placeholder={"nachname"}
              className="newsLetter__container__action__form--lastname"
              value={newsLetter.Surname}
              onChange={(e) => {
                const val = e.target.value;
                setNewsLetter((prev) => ({
                  ...prev,
                  Surname: val,
                }));
              }}
            />
            <div className={"newsLetter__container__action__form__gender"}>
              <div
                className={"newsLetter__container__action__form__gender--item"}
              >
                <input
                  id={"Mannlich"}
                  type="radio"
                  name={"gender"}
                  value={"male"}
                  checked={checked}
                  className="newsLetter__container__action__form--gender"
                  onChange={(e) => {
                    const val = e.target.value;
                    setChecked(!checked);
                    setChecked2(false);
                    setChecked3(false);
                    e.target.checked &&
                      setNewsLetter((prev) => ({
                        ...prev,
                        Gender: val,
                      }));
                  }}
                />
                <label htmlFor="Mannlich">Mannlich</label>
              </div>
              <div
                className={"newsLetter__container__action__form__gender--item"}
              >
                <input
                  id={"Weiblich"}
                  type="radio"
                  name={"gender"}
                  value={"female"}
                  checked={checked2}
                  className="newsLetter__container__action__form--gender"
                  onChange={(e) => {
                    const val = e.target.value;
                    setChecked2(!checked2);
                    setChecked(false);
                    setChecked3(false);
                    e.target.checked &&
                      setNewsLetter((prev) => ({
                        ...prev,
                        Gender: val,
                      }));
                  }}
                />
                <label htmlFor="Weiblich">Weiblich</label>
              </div>
              <div
                className={"newsLetter__container__action__form__gender--item"}
              >
                <input
                  id={"Unisex"}
                  type="radio"
                  name={"gender"}
                  value={"unisex"}
                  checked={checked3}
                  className="newsLetter__container__action__form--gender"
                  onChange={(e) => {
                    const val = e.target.value;
                    setChecked3(!checked3);
                    setChecked2(false);
                    setChecked(false);
                    e.target.checked &&
                      setNewsLetter((prev) => ({
                        ...prev,
                        Gender: val,
                      }));
                  }}
                />
                <label htmlFor="Unisex">Divers</label>
              </div>
            </div>
            <Tooltip
              title={
                "message is rquired and must contain at least 150 characters"
              }
              color={"red"}
              visible={emailSuccess ? true : false}
              placement="bottomRight"
            >
              <input
                type="email"
                placeholder={"Email adresse"}
                className={`newsLetter__container__action__form--email ${
                  emailSuccess ? "input-error" : null
                }`}
                value={newsLetter.Email}
                onChange={(e) => {
                  const val = e.target.value;
                  setNewsLetter((prev) => ({
                    ...prev,
                    Email: val,
                  }));
                  if (
                    e.target.value.match(
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
                  ) {
                    setEmailSuccess(false);
                  } else setEmailSuccess(true);
                }}
              />
            </Tooltip>

            <input
              type="submit"
              className="newsLetter__container__action__form--submit"
              value={"Senden"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsletterRep;
