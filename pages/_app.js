import App from "next/app";
import Head from "next/head";
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "../store/store";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
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
}
export default MyApp;
