import HeadTextLexikon from "./components/head-text/HeadTextLexikon";
import LexikonFilter from "./components/lexikon-filter/LexikonFilter";
import LexikonCollapse from "./components/collapse/LexikonCollapse";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const LexikonScene = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
    return(
        <div className={"lexikon__body__for__all"}>
            <HeadTextLexikon/>
            <LexikonFilter/>
            <LexikonCollapse/>
            <NewsletterRep/>
        </div>
    )
}

export default LexikonScene