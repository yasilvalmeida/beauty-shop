import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../services/actions/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { kontoPageTextData } = useSelector((state) => state.konto);
  const authData = useSelector((state) => state.auth);

  const userName = authData?.userData?.username || "GUEST";

  /* useEffect(() => {
    if (!authData?.isAuthenticated) {
      router.push('/login');
    }
  }, [authData]); */

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="profile__container">
      <h2 className="profile__container--mobile">
        {kontoPageTextData?.profile_header}
      </h2>
      <ul className="profile__container__list">
        <li className="profile__container__list--logged">
          {kontoPageTextData?.profile_logged_in_as}:
        </li>
        <li className="profile__container__list--username">{userName}</li>
        <li
          className="profile__container__list--logout"
          onClick={logoutHandler}
        >
          {kontoPageTextData?.profile_log_out}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
