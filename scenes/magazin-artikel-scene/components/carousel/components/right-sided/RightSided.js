import Link from "next/link";
import {useState,useEffect} from "react"
import PrevBtn from "../prev-next/prev";
import NextBtn from "../prev-next/next";
const RightSided = ({next,previous}) =>{
    const [clicked,setClicked] = useState(false)
    const [text,setText]=useState("den look shoppen")
    useEffect(()=>{
        switch (clicked){
            case true : setText("Schliessen");
                break
            case false:setText("den look shoppen")
                break
        }
    },[clicked])
    return(
        <div className={"carousel__artikel__right"}>
            <span className={"backto"}>
                 <Link href={"/magazinartikelone"} >Zurück zum Artikel</Link>
            </span>
            <div className={"carousel__artikel__right__mainimg"}>
                <img className={!clicked ? "closedimg" : "openedimg"}src="/ArtikelCarousel/elem6" alt=""/>
                <div className={"carousel__artikel__right__mainimg__openingdiv"}>
                    <div className={!clicked ? "closed" : "opened"}>
                        ahbedahsbgs
                    </div>
                    {/*<p onClick={()=>setClicked(!clicked)}>{text}</p>*/}
                </div>
            </div>
            <PrevBtn next={next} previous={previous}/>
            <NextBtn next={next} previous={previous}/>
        </div>
    )
}

export default RightSided