import HeadText from "./components/headtext/HeadText";
import SecondAboutSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdsection/ThirdSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const AboutTwoScene = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
    return(
        <div className="about-two-main-body">
            <HeadText/>
            <SecondAboutSection/>
            <ThirdSection/>
            <Social/>
            <NewsletterRep/>
        </div>
    )
}

export default AboutTwoScene