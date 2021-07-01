import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getFourIcons} from "../../services/actions/homepage__stable";
import icons from "./servicesIcons"
const Services = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getFourIcons())
    },[])
    const fourIcons = useSelector((state) => state.navbar.fourIcons);
    return(
        <>
            <div className={"services-body"} >
                {fourIcons?.map((e,i)=>{
                    return(
                        <div className={"services-item"} key={i}>
                            {icons[i]}
                            <h2>
                                {e?.header}
                            </h2>
                            <p>
                                {e?.text}
                            </p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Services