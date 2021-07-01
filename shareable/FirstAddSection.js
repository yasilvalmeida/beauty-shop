import Image from 'next/image'
import Link from 'next/link';

const FirstAddSection = ({ background, firstData, secondData, textcolor, padding }) => {
    return(
        <>
            <div className={"second-section-home "} style={{backgroundColor:background,paddingTop:padding,paddingBottom:padding}}>
                <div className={"sec-sect-all d-flex flex-wrap"}>
                    <div className={"sec-sec-el col-lg-6"}>
                        <div>
                            <Link href={firstData?.url || '/'}>
                                <a href="">
                                    <Image src={firstData?.images?.url || '/aaa.jpg'} layout='responsive' width={840} height={630}/>
                                </a>
                            </Link>
                        </div>
                        <div className={"sec-sec-el-text"}>
                            <p style={{color:textcolor, cursor: 'pointer'}}>
                                {firstData?.header}
                            </p>
                            <Link href={firstData?.url || '/'}>
                                <a href="#">
                                    <h3 style={{color:textcolor, cursor: 'pointer'}}>
                                        {firstData?.title}
                                    </h3>
                                </a>
                            </Link>
                        </div>
                        <div className={"sec-sec-el-link"}>
                            <Link href={firstData?.url || '/'}>
                                <a>
                                    {firstData?.Link_text}
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={"sec-sec-el col-lg-6"}>
                        <div>
                            <Link href={secondData?.url || '/'}>
                                <a href="#">
                                    <Image src={secondData?.images?.url || '/aaa.jpg'} layout='responsive' width={840} height={630} />
                                </a>
                            </Link>
                        </div>
                        <div className={"sec-sec-el-text"}>
                            <p style={{color:textcolor, cursor: 'pointer' }}>
                                {secondData?.header}
                            </p>

                            <Link href={secondData?.url || '/'}>
                                <a href="#">
                                    <h3 style={{color:textcolor, cursor: 'pointer'}}>
                                        {secondData?.title}
                                    </h3>
                                </a>
                            </Link>     
                        </div>
                        <div className={"sec-sec-el-link"}>
                            <Link href={secondData?.url || '/'}>
                                <a>
                                    {secondData?.Link_text}
                                </a>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstAddSection