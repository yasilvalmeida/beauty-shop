import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getHomePageSctOne } from '../../../services/actions/homepage__stable';
import Link from 'next/link';

const HerrenHead = () => {
    const dispatch = useDispatch();

    const HPFS = useSelector(state => state.navbar.homePageSctOne);
    const herrenIntro = HPFS.find(p => p.position === 'HerrenPage');

    useEffect(() => {

    }, []);

    return(
        <>
            <div className={"herren-head-body"}>
                <div className={"col-lg-6 herren-head-left"}>
                    <div className={"herren-head-left-body"}>
                        <p>{herrenIntro?.header}</p>
                        <Link href={`${herrenIntro?.url || ''}`}>
                            <h2>
                                {herrenIntro?.title}
                            </h2>
                        </Link>
                        <Link href={`${herrenIntro?.url || ''}`}>
                            <button>{herrenIntro?.button_text}</button>
                        </Link>
                    </div>
                </div>
                <Link href={`${herrenIntro?.url || ''}`}>
                    <div className={"col-lg-6 herren-head-right"} style={{backgroundImage:"url(./herrentopimg.png)"}}>

                    </div>
                </Link>
            </div>
        </>
    )
}

export default HerrenHead