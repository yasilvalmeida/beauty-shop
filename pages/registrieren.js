import RegistrationScene from "../scenes/registration";
const Registrieren = () => {
  return (
    <>
      <RegistrationScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Registrieren;
