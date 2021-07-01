import Image from "next/image";
import Link from "next/link";
const FirstShareableIntro = ({smalltxt,bigtext1,bigtext2,btntext,bg,color,padding,homepageIntro}) =>{
    return(
        <div style={{backgroundColor:bg}}>
            <div className={`mobile__firstintro__body ${padding}`} >
                <div className={"text-body"}>
                    <p className={"small-text"} style={{color:color}}>{homepageIntro?.header}</p>
                    <h2 className={"big-text"} style={{color:color}} >{homepageIntro?.title}</h2>
                </div>
                <div className={"image-body"} >
                    {
                        !homepageIntro?.images.url ? <img src='/first1.jpg' />
                            :
                            <Link href={`${homepageIntro?.url}`}>
                                <a href={`${homepageIntro?.url}`}>
                                    <Image src={`${homepageIntro?.images.url} ` || '/first1.jpg'} width={941} height={625} layout="responsive" />
                                </a>
                            </Link>
                    }

                </div>

                <div className={"button-body"}>
                    <Link href={`${homepageIntro?.url || ''}`}>
                        <a href={`${homepageIntro?.url || ''}`}>
                            <button style={{color:bg,backgroundColor:color}}>{homepageIntro?.button_text}</button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FirstShareableIntro