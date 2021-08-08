import Head from "next/head";
import "../styles/index.scss";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { getNavbar } from "../services/actions/homepage__stable";
import { getManufactories } from "../services/actions/manufactories";

function MyApp({ Component, pageProps }) {
  const lang = "de";
  useEffect(() => {
    store.dispatch(getNavbar(lang));
    store.dispatch(getManufactories(lang));
  }, []);
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>Das Parfum & Beauty</title>
        </Head>
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default MyApp;
