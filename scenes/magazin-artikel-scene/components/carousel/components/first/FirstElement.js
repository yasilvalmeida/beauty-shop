import Link from "next/link";

const FirstElement = ({next,previous}) =>{
    return(
        <div className={"carousel__body__artikel__first"} >
            <span className={"backto"}>
                 <Link href={"/magazinartikelone"} >Zurück zum Artikel</Link>
            </span>

            <div className={"carousel__body__artikel__first__mid"}>
                <p className={"carousel__body__artikel__first__mid--txt1"}>COVERSTORY</p>
                <h2 className={"carousel__body__artikel__first__mid--txt2"}>
                    MOMENT _DER WAHRHEIT_
                </h2>
                <p className={"carousel__body__artikel__first__mid--txt3"}>mit Jodie Comer</p>
            </div>
            <div className={"carousel__body__artikel__first__bot"}>
                <p>Foto Juliette Cassidy</p>
                <p>Styling Helen Broadfoot</p>
            </div>
            <button className={"carousel__body__artikel__first__leftbtn"} onClick={previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     className="pu cd dr pv pw px kn">
                    <g fill="none" fillRule="evenodd">
                        <path d="M24 24H0V0h24z"></path>
                        <path fill="currentColor" fillRule="nonzero"
                              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"></path>
                    </g>
                </svg>
            </button>
            <button className={"carousel__body__artikel__first__rightbtn"} onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     className="pu n dr pv pw px kn">
                    <g fill="none" fillRule="evenodd">
                        <path d="M24 24H0V0h24z"></path>
                        <path fill="currentColor" fillRule="nonzero"
                              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"></path>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default FirstElement