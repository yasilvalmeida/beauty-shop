import LoginForm from "./compoents/LoginForm";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const LoginScene = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
    return(
        <>
            <LoginForm/>
        </>
    )
}
export default LoginScene