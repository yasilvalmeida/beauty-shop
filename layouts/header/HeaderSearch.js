import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect, useCallback} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getHeaderContacts} from "../../services/actions/homepage__stable"
import CartSidebar from "../cartSidebar/CartSidebar";
import HeaderLoginPopup from "./modal/HeaderLoginPopup";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import {getBasketData} from "../../services/actions/basket";

const HeaderSearch = () => {
    const [languages, setLanguages] = useState([
        { id: 1, name: 'De', active: true },
        { id: 2, name: 'En', active: false },
        { id: 3, name: 'Fr', active: false }
    ]);

    const dispatch = useDispatch()
    const router = useRouter();
    const headerContacts = useSelector(state => state.navbar.headerContacts);
    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(()=>{
        dispatch(getHeaderContacts())
        dispatch(getUserDataFromLocalStorage())
    },[])

    const [visible,setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };



    const handleChangeLng = useCallback(id => {
        setLanguages(prev => prev.map(lng => {
            lng.active = false;

            if (lng.id === id) {
                lng.active = true;
            }

            return lng;
        }));
    }, [languages]);
useEffect(()=>{
    if(visible){
        dispatch(getBasketData())
    }
},[visible])
    return (
        <>
            <div className={"header-mid-body"}>
                <div className={"header-mid-logo-section"}>
                    <div className={"header-mid-left-side"}>
                        <div className={'head-mid-left-mail'}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg"}>
                                <rect x='48' y='96' width='416' height='320' rx='40' ry='40' style={{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/>
                                <polyline points='112 160 256 272 400 160' style={{fill:"none",strokeLinecap:"round", strokeLinejoin:"round",strokeWidth:"32px"}}/>
                            </svg>
                            <a href={`mailto:${headerContacts[0]?.email}`}>{headerContacts[0]?.email}</a>
                        </div>
                        <div className={'head-mid-left-phone'}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg"}>
                                <path d='M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z'
                                      style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}}/>
                            </svg>
                            <a href={`tel:${headerContacts[0]?.phone_number}`}>{headerContacts[0]?.phone_number}</a>
                        </div>
                    </div>

                    <div className={"head-mid-right-side"}>
                        <div className={"header-search"}>
                            <div>
                                <FontAwesomeIcon icon={faSearch} className={"head-search-icon"}/>
                                <input type="text" placeholder={"suche"}/>
                            </div>
                        </div>
                        <div className={"header-lang"}>
                            {languages.map((lng, idx) => (
                                <span key={lng.id}>
                                    <button
                                        className={lng.active ? 'active' : ''}
                                        onClick={() => handleChangeLng(lng.id)}
                                    >
                                        {lng.name}
                                    </button>
                                    {idx !== languages.length - 1 ? '|' : ''}
                                </span>
                            ))}
                        </div>
                        <div className={"header-icons"}>
                            <HeaderLoginPopup isModalVisible={isModalVisible} setIsModalVisible = {setIsModalVisible}/>
                            <svg
                                onClick={() => {
                                    if(isAuthenticated){
                                        router.push('/konto/main')
                                    }else{
                                        if(router.pathname !== "/login"){
                                            showModal()
                                        }
                                    }
                                }}
                                viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={"letter-svg"} style={{strokeWidth:"0",fill:"#7b7b7b"}}>
                                <g data-name="Layer 2" id="Layer_2">
                                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/>
                                    <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z"/>
                                    <path d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z"/>
                                </g>

                            </svg>
                            <svg
                                onClick={() => {
                                    if(isAuthenticated){
                                        router.push('/konto/whishlist')
                                    }else{
                                        if(router.pathname !== "/login"){
                                            showModal()
                                        }
                                    }
                                }}
                            xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg"} style={{width:"20px",margin:"0 14px"}}>
                                <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z' style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}} />
                            </svg>
                            <svg
                                onClick={() => {
                                    if(isAuthenticated){
                                        showDrawer()
                                    }else{
                                        if(router.pathname !== "/login"){
                                            showModal()
                                        }
                                    }
                                }}
                                xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'  style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px",width:"20px"}} className={"letter-svg"}>
                                <circle cx='176' cy='416' r='16' />
                                <circle cx='400' cy='416' r='16' />
                                <polyline points='48 80 112 80 160 352 416 352' />
                                <path d='M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128'/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={"header-logo"}>
                    <Link exact href={"/"} >
                        <a href="/">
                            <Image
                                src="/logo.png"
                                alt="Das Parfum"
                                width={308}
                                height={75}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <CartSidebar visible = {visible} showDrawer={showDrawer} onClose={onClose}/>
        </>
    )
};

export default HeaderSearch;






