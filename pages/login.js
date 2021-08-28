import LoginScene from "../scenes/login";

const Login = () => {
  return (
    <>
      <LoginScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Login;
