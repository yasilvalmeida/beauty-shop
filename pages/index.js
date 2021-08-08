import { useEffect } from "react";
import Homepage from "../scenes/homepage";
import { getUserDataFromLocalStorage } from "../services/actions/auth";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
