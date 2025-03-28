import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { login } from "../../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { notification, Tooltip } from "antd";

const LoginForm = () => {
  const router = useRouter();
  const { loginPageTextData } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authData = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const success = useSelector((state) => state.auth.loginError);
  useEffect(() => {
    if (success === null) {
    } else if (success?.error) {
      openNotificationWithIcon("error");
    } else {
      setEmail("");
      setPassword("");
      openNotificationWithIcon("success");
    }
  }, [success]);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "",
      description:
        type === "success"
          ? loginPageTextData?.message_success
          : loginPageTextData?.message_fail,
    });
  };
  useEffect(() => {
    if (authData?.isAuthenticated) {
      router.push("/");
    }
  }, [authData]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    loginPageTextData?.message_warning_email
  );
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(
    loginPageTextData?.message_warning_password
  );
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      password.length >= 8
    ) {
      dispatch(
        login({
          email,
          password,
        })
      );
      setEmailError("");
      setPasswordError("");
    } else {
      if (password.length < 8) {
        setPasswordError(true);
        setPasswordErrorMessage(
          loginPageTextData?.message_warning_at_least_eight
        );
      }
      if (password.length === 0) {
        setPasswordErrorMessage(
          loginPageTextData?.message_warning_password_required
        );
      }
      if (
        !email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setEmailError(true);
        setEmailErrorMessage(loginPageTextData?.message_warning_email);
      }
      if (email.length === 0) {
        setEmailErrorMessage(loginPageTextData?.message_warning_email_required);
      }
    }
  };

  return (
    <>
      <div className={"login-scene d-flex"}>
        <div className={"login-scene-head"}>
          <h2>{loginPageTextData?.header}</h2>
          <span className={"go-back"} onClick={() => router.back()}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={"head-search-icon"}
            />{" "}
            {loginPageTextData?.back}
          </span>
        </div>
        <div className={"login-scene-form-and-else d-flex flex-wrap"}>
          <div className={"left-of-login-form col-lg-5 d-flex"}>
            <div className={"left-login-form-one"}>
              <h2>{loginPageTextData?.login_title}</h2>
              <form action="#" onSubmit={handleLogin}>
                <Tooltip
                  title={emailErrorMessage}
                  color={"red"}
                  visible={emailError ? "true" : "false"}
                  placement="bottomRight"
                >
                  <input
                    type="email"
                    placeholder={loginPageTextData?.email}
                    className={`${emailError ? "input-error" : null}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (
                        e.target.value.match(
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        )
                      ) {
                        setEmailError(false);
                      } else setEmailError(true);
                    }}
                  />
                </Tooltip>
                <Tooltip
                  title={passwordErrorMessage}
                  color={"red"}
                  visible={passwordError ? "true" : "false"}
                  placement="bottomRight"
                >
                  <input
                    type="password"
                    placeholder={loginPageTextData?.password}
                    value={password}
                    className={`${passwordError ? "input-error" : null}`}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value.length < 8) {
                        setPasswordError(true);
                      } else {
                        setPasswordError(false);
                      }
                    }}
                  />
                </Tooltip>
                <div className={"forgot-pass-and-submit"}>
                  <button type="submit">
                    {loginPageTextData?.login_button}
                  </button>
                  <Link href={"/forgotpassword"}>
                    <a href="/forgotpassword">
                      {loginPageTextData?.forgot_pasword}
                    </a>
                  </Link>
                </div>
              </form>
            </div>
            <div className={"left-login-form-three"}>
              <button className="facebook-button">
                <span className="facebook-button--icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </span>
                <span className="facebook-button--text">
                  {loginPageTextData?.facebook}
                </span>
              </button>
              <button className="google-button">
                <span className="google-button--icon">
                  <FontAwesomeIcon icon={faGooglePlusSquare} />
                </span>
                <span className="google-button--text">
                  {loginPageTextData?.google}
                </span>
              </button>
            </div>
          </div>
          <div className={"col-lg-5 login-right-form"}>
            <div className={"login-right-one"}>
              <h2>{loginPageTextData?.create_title}</h2>
              <Link href="/registrieren">
                <button>{loginPageTextData?.create_button}</button>
              </Link>
            </div>
            <p className={"login-right-mid-txt"}>{loginPageTextData?.or}</p>
            <div className={"login-right-two"}>
              <button>{loginPageTextData?.guest_button}</button>
              <Link href={"/order"}>
                <a href="/order">{loginPageTextData?.pay_direct}</a>
              </Link>
            </div>
            <div className={"login-right-three d-flex flex-wrap"}>
              <div>
                <img
                  src="./amazonlogin.png"
                  alt="amazon"
                  className={"col-lg-6"}
                />
              </div>
              <div>
                <img
                  src="./paypallogin.png"
                  alt="paypal"
                  className={"col-lg-6"}
                  f
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
