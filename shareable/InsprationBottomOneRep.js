import Link from 'next/link';

const InspirationBottomOneRep = ({ background, color, inspiration }) => (
    <>
        <div style={{backgroundColor:background}}>
            <div className={"d-flex flex-wrap inspiration-bottom "} >
                <div className={"col-lg-6 inspiration-bottom-text"}>
                    <div className={"inspiration-bottom-head-txt"}>
                        <p style={{color:color}}>{inspiration?.header}</p>
                        <Link href={inspiration?.url || ''}>
                            <h2 style={{color:color, cursor: 'pointer'}}>
                                {inspiration?.title}
                            </h2>
                        </Link>
                    </div>
                    <span style={{color:color}}>
                        {inspiration?.text}
                    </span>
                    <Link href={inspiration?.url || ''}>
                        <button className={"inspiration-bottom-btn"} style={{color:background,backgroundColor:color}}>{inspiration?.button_text}</button>
                    </Link>
                </div>
                <Link href={inspiration?.url || ''}>
                    <div className={"col-lg-6 inspiration-bottom-image"} style={{backgroundImage: `url(${inspiration?.images?.url || '/inspirationbot1.png'})`, cursor: 'pointer'}}>
                        <div className={"inspiration-bottom-imagetxt"}>
                            <p className={"insp-bot-sm"}>{inspiration?.image_header}</p>
                            <p className={"insp-bot-lg"}>
                                {inspiration?.image_title}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
);

export default InspirationBottomOneRep