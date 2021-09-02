import axios from "axios";
import {
  GET_COUNTRIES,
  SET_REGISTER_TXT_DATA,
  POST_REGISTRATION_DATA,
  SET_ERROR,
  SET_LOADED,
  SET_REGISTRATION_DATA,
} from "../action-types/registration";

export const getRegisterCountries = () => {
  return (dispatch) => {
    dispatch({ type: SET_LOADED });
    axios
      .get(`${process.env.PLENTY_MARKET_API_URL}?action=fetchCountries`)
      .then((data) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getRegisterTextData = (lang) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADED });

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/registration-page-data?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_REGISTER_TXT_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const postRegistration = (formData) => {
  return function (dispatch) {
    dispatch({
      type: SET_REGISTRATION_DATA,
    });
    formData.referrerId = process.env.PLENTY_MARKET_CONTACT_REFERRER_ID;
    formData.typeId = process.env.PLENTY_MARKET_CONTACT_TYPE_ID;
    formData.classId = process.env.PLENTY_MARKET_CONTACT_CLASS_ID;
    formData.plentyId = process.env.PLENTY_MARKET_ID;
    formData.userId = process.env.PLENTY_MARKET_USER_ID;
    formData.options = [
      {
        typeId: 2,
        subTypeId: 4,
        value: formData.email,
        priority: 0,
      },
    ];
    axios
      .post(
        `${process.env.PLENTY_MARKET_API_URL}?action=createCustomer`,
        formData
      )
      .then(async (response) => {
        const { data, status } = response;
        if (status === 200) {
          if (formData.subscribe) {
            const { id } = data;
            const { email, firstName, lastName } = formData;
            await axios.get(
              `${process.env.PLENTY_MARKET_API_URL}?action=sendRegistrationEmail&id=${id}`
            );
            await axios.post(
              `${process.env.PLENTY_MARKET_API_URL}?action=createNewsletter`,
              {
                email,
                firstName,
                lastName,
                folderIds: [process.env.PLENTY_MARKET_FOLDER_ID],
                isFrontend: true,
              }
            );
          }
          dispatch({ type: POST_REGISTRATION_DATA, payload: data });
        } else {
          dispatch({ type: SET_ERROR, payload: "Customer not registered!" });
        }
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
      });
  };
};
