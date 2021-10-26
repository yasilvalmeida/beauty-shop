import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postNewsletter,
  setNewsLetters,
} from "../../../../services/actions/newsletter";
import { notification, Tooltip } from "antd";
import { getNewsletterText } from "../../../../services/actions/homepage__stable";

const RecommendationBody = ({ padding }) => {
  const dispatch = useDispatch();
  const [newsLetter, setNewsLetter] = useState({
    First_name: "",
    Surname: "",
    Gender: "",
    Email: "",
  });
  const { recommendationTextData } = useSelector(
    (state) => state.recommendation
  );
  const lang = useSelector((state) => state.header.headerLanguage);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const success = useSelector((state) => state.newsletter.success);

  const [suc, setSuc] = useState(null);
  useEffect(() => {
    dispatch(getNewsletterText(lang));
  }, [lang]);

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
      <div className="recommendation__container">
        <div className="recommendation__container__header">
          <h2 className="recommendation__container__header--title">
            {recommendationTextData?.main_title}
          </h2>
          <p className="recommendation__container__header--info">
            {recommendationTextData?.main_subtitle_one}
          </p>
          <p className="recommendation__container__header--info">
            {recommendationTextData?.main_text_one}
          </p>
        </div>
        <div className="recommendation__container__action">
          <form
            action="#"
            className="recommendation__container__action__form"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name={"name"}
              placeholder={textData?.form_firstname}
              className="recommendation__container__action__form--name"
              value={newsLetter.First_name}
              onChange={(e) => {
                const val = e.target.value;
                setNewsLetter((prev) => ({
                  ...prev,
                  First_name: val,
                }));
              }}
            />
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
                placeholder={textData?.form_email}
                className={`recommendation__container__action__form--email ${
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
          </form>
        </div>
        <div className="recommendation__container__header">
          <p className="recommendation__container__header--info">
            {recommendationTextData?.main_subtitle_two}
          </p>
          <p className="recommendation__container__header--info">
            {recommendationTextData?.main_text_two}
          </p>
        </div>
        <div className="recommendation__container__action">
          <form
            action="#"
            className="recommendation__container__action__form"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name={"name"}
              placeholder={textData?.form_firstname}
              className="recommendation__container__action__form--name"
              value={newsLetter.First_name}
              onChange={(e) => {
                const val = e.target.value;
                setNewsLetter((prev) => ({
                  ...prev,
                  First_name: val,
                }));
              }}
            />
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
                placeholder={textData?.form_email}
                className={`recommendation__container__action__form--email ${
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
            <p className={"recommendation__container__action__form__required"}>
              {recommendationTextData?.main_required_text}
            </p>
            <div className={"recommendation__container__action__form__gender"}>
              <div
                className={
                  "recommendation__container__action__form__gender--item"
                }
              >
                <input
                  id={"Mannlich"}
                  type="checkbox"
                  name={"gender"}
                  value={"male"}
                  checked={checked}
                  className="recommendation__container__action__form--gender"
                  onChange={(e) => {
                    const val = e.target.value;
                    setChecked(!checked);
                    e.target.checked &&
                      setNewsLetter((prev) => ({
                        ...prev,
                        Gender: val,
                      }));
                  }}
                />
                <label htmlFor="Mannlich">
                  {recommendationTextData?.main_checkbox_text}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="recommendation__container__action__form--submit"
            >
              {recommendationTextData?.main_button}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecommendationBody;
