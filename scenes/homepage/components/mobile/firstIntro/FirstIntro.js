import Image from "next/image";
import FirstShareableIntro from "../../../../../shareable/firstIntro/FirstShareableIntro";
import {useSelector} from "react-redux";
const FirstIntroMobile = () =>{
    const smalltxt = "Entdecken Sie perfekte Pflege und Düfte für Ihren Stil"
    const bigtext1 = "Machen Sie"
    const bigtext2 = "Den Typen-Test"
    const btntext = "JETZT SHOPPEN"
    const HPFS = useSelector(state => state.navbar.homePageSctOne);
    const homepageIntro = HPFS.find(p => p.position === 'HomePage');

    return(
        <>
            <FirstShareableIntro homepageIntro={homepageIntro}/>
        </>
    )
}

export default FirstIntroMobile