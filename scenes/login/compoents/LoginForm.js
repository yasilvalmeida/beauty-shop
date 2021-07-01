import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { login } from '../../../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {notification, Tooltip} from "antd";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authData = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const success = useSelector(state=>state.auth.loginError)
  useEffect(() => {
    if (success?.response?.data?.message[0]?.messages[0]?.message !== undefined &&
        success?.response?.data?.message[0]?.messages[0]?.message !== null) {
      openNotificationWithIcon("error")
    } else if (success) {
      setEmail("")
      setPassword("")
      openNotificationWithIcon("success")
    }
  }, [success])
  const openNotificationWithIcon = type => {
    notification[type]({
      message: '',
      description: type === "success" ? "Logged in successfully" : "Please provide your email or password"
    });
  };
  useEffect(() => {
    if (authData?.isAuthenticated) {
      router.push('/');
    }
  }, [authData]);
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [emailErrorMessage,setEmailErrorMessage] = useState("Please insert a valid email address.")
  const [passwordErrorMessage,setPasswordErrorMessage] = useState("Please insert a valid email password.")
  const handleLogin = e => {
    e.preventDefault();
    if(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
    password.length >= 8){
      dispatch(login({
        identifier: email,
        password
      }));
      setEmailError("")
      setPasswordError("")

    }else {
      if(password.length <8){
        setPasswordError(true)
        setPasswordErrorMessage("Password must be at least 8 characters")
      }
      if(password.length === 0){
        setPasswordErrorMessage("Password is required")
      }
      if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        setEmailError(true)
        setEmailErrorMessage("Please insert a valid email address.")
      }
      if(email.length === 0){
        setEmailErrorMessage("Email is required")
      }
    }
  };

  return (
    <>
      <div className={'login-scene d-flex'}>
        <div className={'login-scene-head'}>
          <h2>Anmelden</h2>
          <Link href={'/'}>
            <a className={'hovered-top-link'} href={'/'}>
              Zurück
            </a>
          </Link>
        </div>
        <div className={'login-scene-form-and-else d-flex flex-wrap'}>
          <div className={'left-of-login-form col-lg-5 d-flex'}>
            <div className={'left-login-form-one'}>
              <h2>Kunden Log-in</h2>
              <form action='#' onSubmit={handleLogin}>
                <Tooltip title={emailErrorMessage} color={"red"} visible={emailError ? true : false}
                         placement="bottomRight">
                  <input
                      type='email'
                      placeholder={'E-Mail-Adresse'}
                      className={`${emailError ? "input-error" : null}`}
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value)
                        if(e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                          setEmailError(false)
                        }else setEmailError(true)
                      }}
                  />
                </Tooltip>
                <Tooltip title={passwordErrorMessage} color={"red"} visible={passwordError ? true : false}
                         placement="bottomRight">
                  <input
                      type='password'
                      placeholder={'Passwort'}
                      value={password}
                      className={`${passwordError ? "input-error" : null}`}
                      onChange={e => {
                        setPassword(e.target.value)
                        if(e.target.value.length<8){
                          setPasswordError(true)
                        }else {setPasswordError(false)}
                      }}
                  />
                </Tooltip>
                <div className={'forgot-pass-and-submit'}>
                  <button type='submit'>Anmelden</button>
                  <Link href={'/forgotpassword'}>
                    <a href='/forgotpassword'>Passwort vergessen</a>
                  </Link>
                </div>
              </form>
            </div>
            <div className={'left-login-form-three'}>
              <button className='facebook-button'>
                <span className='facebook-button--icon'>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </span>
                <span className='facebook-button--text'>
                  Mit Facebook anmelden
                </span>
              </button>
              <button className='google-button'>
                <span className='google-button--icon'>
                  <FontAwesomeIcon icon={faGooglePlusSquare} />
                </span>
                <span className='google-button--text'>
                  Mit Google+ anmelden
                </span>
              </button>
            </div>
          </div>
          <div className={'col-lg-5 login-right-form'}>
            <div className={'login-right-one'}>
              <h2>Noch kein Konto? Registrieren</h2>
              <Link href="/registrieren">
              <button>Konto erstellen</button>
              </Link>
              
            </div>
            <p className={'login-right-mid-txt'}>ODER</p>
            <div className={'login-right-two'}>
              <button>Gast</button>
              <Link href={'/order'}>
                <a href='/order'>Direkt per Paypal oder amazon pay bezahlen</a>
              </Link>
            </div>
            <div className={'login-right-three d-flex flex-wrap'}>
              <div>
                <img
                    src='./amazonlogin.png'
                    alt='amazon'
                    className={'col-lg-6'}
                />
              </div>
              <div>
                <img
                    src='./paypallogin.png'
                    alt='paypal'
                    className={'col-lg-6'}
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
