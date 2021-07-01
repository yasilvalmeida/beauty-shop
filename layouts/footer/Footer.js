import FooterPayment from "./FooterPayment";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";
import FooterNavigation from "./FooterNavigation";
import FooterCopyright from "./FooterCopyright";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react"
import {getFooterData,getFooterTop} from "../../services/actions/footer";

const Footer = () =>{
    const dispatch = useDispatch()
    const footerData = useSelector(state=>state.footer.footerData)
useEffect(()=>{
    dispatch(getFooterData())
    dispatch(getFooterTop())
},[])
    return(
        <>
           <footer>
               <FooterPayment/>
               <FooterNav/>
               <FooterNavigation footerData={footerData}/>
               <FooterCopyright/>
               <FooterBottom/>
           </footer>
        </>
    )
}

export default Footer