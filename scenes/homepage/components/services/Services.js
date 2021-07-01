import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getFourIcons} from "../../../../services/actions/homepage__stable";
import Services from "../../../../shareable/services/Services";

const ServicesHome = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getFourIcons())
    },[])
    const fourIcons = useSelector((state) => state.navbar.navList);

    return(
        <>
            <Services/>
        </>
    )
}

export default ServicesHome