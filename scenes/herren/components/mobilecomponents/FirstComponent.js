import FirstShareableIntro from "../../../../shareable/firstIntro/FirstShareableIntro";
import {useSelector} from "react-redux";

const FirstHerrenComponent = () =>{
    const smalltxt = "Bart und Gesichtspflege"
    const bigtext1 = "Ihre neue "
    const bigtext2 = "Grooming routine"
    const btntext = "JETZT SHOPPEN"
    const color = "white"
    const bg="black"
    const padding="paddmobher"
    const HPFS = useSelector(state => state.navbar.homePageSctOne);
    const herrenIntro = HPFS.find(p => p.position === 'HerrenPage');

    return(
        <>
            <FirstShareableIntro smalltxt={smalltxt} bigtext1={bigtext1} bigtext2={bigtext2} btntext={btntext} color={color} bg={bg} padding={padding} homepageIntro={herrenIntro}/>
        </>
    )
}

export default FirstHerrenComponent