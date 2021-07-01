import axios from 'axios';
import store from '../store/store';

// const token = JSON.parse(Cookies.get('userData') || '{}').jwt;
const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

let token = '';

const setToken = token => {
  return new Promise(resolve => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    resolve()
  })
}

let foo = () => {
  token = store.getState().auth.token;

  if (token) {
    setToken(token)
      .then(() => {
        foo = () => {};
      });
  }
};


store.subscribe(foo);

const instance = axios.create({
  baseURL
  // headers
});

instance.interceptors.response.use(undefined, err => {
  return new Promise(() => {
    if (err.response.status === 401) {
      localStorage.removeItem('userData');
    }

    throw err;
  })
})

export default instance;