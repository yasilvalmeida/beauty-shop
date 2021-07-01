import Sidebar from '../../shareable/sidebar/Sidebar';
import KontoContainer from './components/konto-container/KontoContainer';
import Adressen from "./components/adressen/Adressen";
import {useRouter} from "next/router";
import Nutzerdaten from "./components/nutzerdaten/Nutzerdaten";
import Bestellungen from "./components/bestellungen/Bestellungen";
import WhishList from "./components/whishlist/Whishlist";
import NewsLetter from "./components/newsletter/NewsLetter";
import Lesezeichen from "./components/lesezeichen/Lesezeichen";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getUserDataFromLocalStorage} from "../../services/actions/auth"
import {getKontoMainBoxesData} from "../../services/actions/konto";
import {Space, Spin} from "antd";

const Konto = () => {
    const dispatch = useDispatch()
    const authData = useSelector(state => state.auth);
    const loading = useSelector(state => state.konto.mainBoxesLoaded)

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getKontoMainBoxesData())
    }, []);

    useEffect(() => {
        if (!authData?.isAuthenticated) {
            router.push('/');
        }
    }, [authData]);
    const router = useRouter()
    console.log(authData)
    return (
        <>{
            loading ? (
                <div className={"loader__body"}>
                    <Space size="middle">
                        <Spin size="large"/>
                    </Space>
                </div>
            ) : <>
                <div className='konto'>
                    <Sidebar/>
                    {router.query.id == "main" && <KontoContainer/>}
                    {router.query.id == "adressen" && <Adressen/>}
                    {router.query.id == "nutzerdaten" && <Nutzerdaten/>}
                    {router.query.id == "bestellungen" && <Bestellungen/>}
                    {router.query.id == "whishlist" && <WhishList/>}
                    {router.query.id == "newsletter" && <NewsLetter/>}
                    {router.query.id == "lesezeichen" && <Lesezeichen/>}
                </div>
                {router.query.id == "whishlist" && <NewsletterRep/>}
            </>
        }</>
    );
};

export default Konto;
