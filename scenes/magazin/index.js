import ComponentHeaderBody from "./components/component-header-body/ComponentHeaderBody";
import AddSection from "./components/add-section/AddSection";
import ProductsList from "./components/products-list-top/ProductsList";
import MagazinSecondSection from "./components/magazin-second-section/MagazinSecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import BeautyEssentials from "./components/beauty-esentials/BeautyEsentials";
import MagazinSecondSectionMobile from "./components/magazin-second-section/MagazinSecondSectionMobile";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getNewsReport, getStairsAdd} from "../../services/actions/news";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
const MagazinScene = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserDataFromLocalStorage());
        dispatch(getStairsAdd())
        dispatch(getNewsReport())
    },[])

    const adds = useSelector(state => state.news.stairAdd);
    const addData1 = adds.find(n => n.position === 'One');
    const addData2 = adds.find(n => n.position === 'Two');
    const addData3 = adds.find(n => n.position === 'Three');
    const addData4 = adds.find(n => n.position === 'Four');
    const addData5 = adds.find(n => n.position === 'Five');
    const addData6 = adds.find(n => n.position === 'Six');

    return(
        <div className={"magazin__all__elements"}>
            <ComponentHeaderBody/>
            <AddSection addData1={addData1} addData2={addData2} addData3={addData3}/>
            <ProductsList/>
            <MagazinSecondSection/>
            <MagazinSecondSectionMobile/>
            <ProductsList/>
            <AddSection addData1={addData4} addData2={addData5} addData3={addData6}/>
            <BeautyEssentials/>
            <Social/>
            <NewsletterRep/>
        </div>
    )
}

export default MagazinScene