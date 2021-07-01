import ReactPlayer from 'react-player'
import {useState} from "react";
import {useRef} from "react"

const BottomVideo = () =>{
    const [play1,setPlay1] =useState(false)
    const [play2,setPlay2] =useState(false)
    const [play3,setPlay3] =useState(false)
    const y = useRef()
    return(
        <>
            <div className={"bottom-video-body d-flex flex-wrap"} style={{marginBottom:"12rem"}} ref={y}>

                <div className={"col-lg-4 small-vid-bod"}>
                    <div className={"video-small-body-only"}>
                        <ReactPlayer url='/video.webm'  muted={true}
                                     width='100%'
                                     height='100%'
                                     playing={play1}
                                     id={"videoBG"}


                            // light="https://i.stack.imgur.com/zw9Iz.png"
                        />
                        <img src="/play.png" alt="play" onClick={()=>setPlay1(true)} style={play1 ? {display:"none"} : null}/>
                        <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg"
                             onClick={()=>{
                                 setPlay1(false)
                             }}

                             xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 512 512"  space="preserve" style={!play1 ? {
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            position: "absolute",
                            // width: "6rem",
                            display:"none"
                        }: {
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            position: "absolute",
                            width: "7.5rem",
                            left:"42%",
                            top:"36%",
                            cursor:"pointer"
                        }}>
                            <g>
                                <line className="st0" x1="197.8" y1="430.8" x2="197.8" y2="81.2"/>
                                <line className="st0" x1="314.2" y1="430.8" x2="314.2" y2="81.2"/>
                            </g>
                        </svg>
                    </div>
                    <div className={"small-vid-text"}>
                        <p> Review </p>
                        <h2>
                            Notorious Oud von D.S. & Durga
                        </h2>
                        <span>
                            Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
                            indonesischen Duft Notorious Oud von D.S. & Durga vorstellen. Formuliert in Bed-Stuy, Brooklyn mit
                            nordafrikanischem Papyrus, afghanischem Safran und bulgarischer Rose.
                        </span>
                        <a href="#">
                            Produkt shoppen
                        </a>
                    </div>
                </div>
                <div className={"col-lg-4 small-vid-bod"}>
                    <div className={"video-small-body-only"}>
                        <ReactPlayer url='/video.webm'  muted={true}
                                     width='100%'
                                     height='100%'
                                     playing={play2}
                                     id={"videoBG"}


                            // light="https://i.stack.imgur.com/zw9Iz.png"
                        />
                        <img src="/play.png" alt="play" onClick={()=>setPlay2(true)} style={play2 ? {display:"none"} : null}/>
                        <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg"
                             onClick={()=>{
                                 setPlay2(false)
                             }}

                             xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 512 512"  space="preserve" style={!play2 ? {
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            position: "absolute",
                            // width: "6rem",
                            display:"none"
                        }: {
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            position: "absolute",
                            width: "7.5rem",
                            left:"42%",
                            top:"36%",
                            cursor:"pointer"
                        }}>
                            <g>
                                <line className="st0" x1="197.8" y1="430.8" x2="197.8" y2="81.2"/>
                                <line className="st0" x1="314.2" y1="430.8" x2="314.2" y2="81.2"/>
                            </g>
                        </svg>
                    </div>
                    <div className={"small-vid-text"}>
                        <p> Review </p>
                        <h2>
                            Notorious Oud von D.S. & Durga
                        </h2>
                        <span>
                            Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
                            indonesischen Duft Notorious Oud von D.S. & Durga vorstellen. Formuliert in Bed-Stuy, Brooklyn mit
                            nordafrikanischem Papyrus, afghanischem Safran und bulgarischer Rose.
                        </span>
                        <a href="#">
                            Produkt shoppen
                        </a>
                    </div>
                </div>
                <div className={"col-lg-4 small-vid-bod"}>
                    <div className={"video-small-body-only"}>
                        <ReactPlayer url='/video.webm'  muted={true}
                                     width='100%'
                                     height='100%'
                                     playing={play3}
                                     id={"videoBG"}


                            // light="https://i.stack.imgur.com/zw9Iz.png"
                        />
                        <img src="/play.png" alt="play" onClick={()=>setPlay3(true)} style={play3 ? {display:"none"} : null}/>
                        <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg"
                             onClick={()=>{
                                 setPlay3(false)
                             }}

                             xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 512 512"  space="preserve" style={!play3 ? {
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            position: "absolute",
                            // width: "6rem",
                            display:"none"
                        }: {
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            position: "absolute",
                            width: "7.5rem",
                            left:"42%",
                            top:"36%",
                            cursor:"pointer"
                        }}>
                            <g>
                                <line className="st0" x1="197.8" y1="430.8" x2="197.8" y2="81.2"/>
                                <line className="st0" x1="314.2" y1="430.8" x2="314.2" y2="81.2"/>
                            </g>
                        </svg>
                    </div>
                    <div className={"small-vid-text"}>
                        <p> Review </p>
                        <h2>
                            Notorious Oud von D.S. & Durga
                        </h2>
                        <span>
                            Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
                            indonesischen Duft Notorious Oud von D.S. & Durga vorstellen. Formuliert in Bed-Stuy, Brooklyn mit
                            nordafrikanischem Papyrus, afghanischem Safran und bulgarischer Rose.
                        </span>
                        <a href="#">
                            Produkt shoppen
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomVideo