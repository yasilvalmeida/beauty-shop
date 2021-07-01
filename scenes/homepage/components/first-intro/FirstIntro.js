import {getHomePageSctOne} from "../../../../services/actions/homepage__stable";
import { useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Link from "next/link";

const FirstIntro = () =>{

    const HPFS = useSelector(state => state.navbar.homePageSctOne);
    const homepageIntro = HPFS.find(p => p.position === 'HomePage');


    return(
        <>
            <div className={"first-intro "}>
                <div className={"first-intro-body "}>
                    <div className={"first-intro-bod-left"}>
                        <div>
                            <p className={"intro-small-txt"}>{homepageIntro?.header}</p>

                            <Link href={`${homepageIntro?.url || ''}`}>
                                <h2 className={"intro-big-txt"}>{homepageIntro?.title}</h2>
                            </Link>
                        </div>
                        
                        <Link href={`${homepageIntro?.url || ''}`}><button>{homepageIntro?.button_text}</button></Link>
                    </div>
                    <div className={"first-intro-bod-right "} >
                        {
                            !homepageIntro?.images.url ? <img src='/first1.jpg' />
                                :
                                <Link href={`${homepageIntro?.url}`}>
                                    <img src={`${homepageIntro?.images.url} ` || '/first1.jpg'} />
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstIntro