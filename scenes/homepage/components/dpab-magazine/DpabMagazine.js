import Image from 'next/image'
import {useSelector} from "react-redux";
import Link from "next/link";
const DpabMagazine = () =>{
    const news = useSelector(({ news }) => news);

    const dpabBig = news.newsReports.find(n => n.position === 'HomePageThree');
    const dpabLeft = news.newsReports.find(n => n.position === 'HomePageFour');
    const dpabRight = news.newsReports.find(n => n.position === 'HomePageFive');
    return(
        <>
            <div className={"dpab-magazin-all"}>
                <div className={"dpab-magazin-body"}>
                    <h2 className={"dpab-magazin-title"}>DPAB MAGAZIN</h2>
                    <div className={"dpab-top-section"}>
                        <div className={"dpab-top-section-img"} >
                        <Image src={`${dpabBig?.images?.url || '/productbotleft.png'}`} width={1720} height={695} layout='responsive'/>
                        </div>
                        <div className={"dpab-top-section-txt"}>
                            <h2>{dpabBig?.title}</h2>
                            <p>{dpabBig?.header}</p>
                            <span>
                                {dpabBig?.text}
                             </span>
                            <Link href={dpabBig?.url || "/"}>
                                <a href={"#"}>{dpabBig?.link_text}</a>
                            </Link>
                        </div>
                    </div>
                    <div className={"dpab-bottom-section d-flex flex-wrap"}>
                        <div className={"col-lg-6 dpab-bottom-section-left d-flex"}>
                            <div className={"dpab-bottom-section-left-img-bod"}>
                                <div className={"dpab-bottom-section-left-img"}>
                                    <Image  src={`${dpabLeft?.images?.url || '/productbotleft.png'}`} width={837} height={635} layout='responsive'/>
                                </div>
                            </div>
                            <div className={"dpab-bottom-section-left-txt"}>
                                <h2>{dpabLeft?.title}</h2>
                                <p>{dpabLeft?.header}</p>
                                <span>
                                    {dpabLeft?.text}
                                </span>
                                <Link href={dpabLeft?.url || "/"}>
                                    <a href="#">{dpabLeft?.link_text}</a>
                                </Link>
                            </div>
                        </div>
                        <div className={"dpab-bottom-section-right"}>
                                <h2>{dpabRight?.title}</h2>
                                <p>{dpabRight?.header}</p>
                                <span>
                                    {dpabRight?.text}
                                </span>
                                <div className={"dpab-bottom-section-right-img"}>
                                <Image  src={`${dpabRight?.images.url || '/productbotleft.png'}`} width={760} height={627} layout='responsive'/>
                                </div>
                                <Link href={dpabRight?.url || "/"}>
                                    <a href="#">{dpabRight?.link_text}</a>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DpabMagazine