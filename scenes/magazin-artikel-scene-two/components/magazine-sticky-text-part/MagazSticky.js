import Image from "next/image";
import FirstTextSection from "./components/firstsection/FirstSection";
import Products from "../products/Products";
import FirstSectionShortText from "./components/firstsection/FirstSectionShortText";
const MagazSticky = () =>{
    return(
        <div className={"magaz__artikel__sticky__container__second"}>
            <div className={"magaz__artikel__sticky__container__second__image"}>
                <div className={"magaz__artikel__two__sticky"}>
                    <Image src={"/magazin/magaz.jpg"} width={500} height={627}/>
                    <p>Produkte und Bildbeschreibung  </p>
                </div>
            </div>
            <div className={"magaz__artikel__sticky__container__second__image2"}>
                <Image src={"/magazin/magaz.jpg"} width={994} height={743}/>
                <p>Produkte und Bildbeschreibung  </p>
            </div>
            <div className={"magaz__artikel__sticky__container__second__text"}>
                <FirstTextSection/>
                <Products/>
                <FirstTextSection/>
                <Products/>
                <FirstSectionShortText/>
            </div>
        </div>
    )
}

export default MagazSticky