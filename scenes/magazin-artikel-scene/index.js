import MagazinArtikelHeader from "./components/component-header/MagazinArtikelHeader";
import ArtikelFirstSectionBody from "./components/artikel-first-section/ArtikelFirstSection";
import ArtikelFirstSecBottom from "./components/artikel-first-sec-bottom/ArtikelFirstSecBottom";
import MagazSticky from "./components/magazine-sticky-text-part/MagazSticky";
import ArtikelCenteredSection from "./components/artikel-centered-text/ArtikelCenteredTextSection";
import ArtikelTwoImages from "./components/artikel-two-images/ArtikelTwoImages";
import ArtikelProductsList from "./components/artikel-products-list/ArtikelProductsList";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useState,useEffect} from "react"
import CarouselArtikel from "./components/carousel/CarouselArtikel";
import {useDispatch} from "react-redux";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
const MagazinArtikelScene = () =>{
    const [showSlider,setShowSlider] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
    return(
        <div className={"artikel__all__elements"}>
            {
                !showSlider ?
                    <>
                        <MagazinArtikelHeader/>
                        <ArtikelFirstSectionBody/>
                        <ArtikelFirstSecBottom setShowSlider={setShowSlider}/>
                        <MagazSticky/>
                        <ArtikelCenteredSection/>
                        <ArtikelTwoImages/>
                        <ArtikelProductsList/>
                        <Social/>
                        <NewsletterRep/>
                    </>:<CarouselArtikel setShowSlider={setShowSlider}/>
            }
        </div>
    )
}

export default MagazinArtikelScene