import {useState} from "react"
import {useRouter} from "next/router";

const ArtikelFirstSecBottom = ({setShowSlider}) =>{
    const route = useRouter()
    return(
        <div className={"artikel__first__bottom__container"}>
            <div className={"artikel__first__bottom__container__images"}>
                <div className={"artikel__first__bottom__container__images--itembig"}>
                    <img src="/magazin/artikel/artikel1.png" alt="sirun"/>
                </div>
                <div className={"artikel__first__bottom__container__images--itemsmall"}>
                    <img src="/magazin/addsection/image2.png" alt=""/>
                </div>
                <div className={"artikel__first__bottom__container__images--itemsmall"}>
                    <img src="/magazin/addsection/image2.png" alt=""/>
                </div>
                <div className={"artikel__first__bottom__container__images__itemsmallmobile"}>
                    <div >
                        <img src="/magazin/addsection/image2.png" alt=""/>
                    </div>
                    <div >
                        <img src="/magazin/addsection/image2.png" alt=""/>
                    </div>
                </div>
            </div>
            <span onClick={()=>route.push("/magazinartikelone/gallery")} className={"artikel__first__bottom__container--link"}>Fotogalerie öffnen</span>
        </div>
    )
}

export default ArtikelFirstSecBottom