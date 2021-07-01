const PrevBtn = ({previous}) =>{
    return(

            <button className={"centered__artikel__carousel__leftbtn"} onClick={previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     className="pu cd dr pv pw px kn">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M24 24H0V0h24z"></path>
                        <path fill="currentColor" fill-rule="nonzero"
                              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"></path>
                    </g>
                </svg>
            </button>


    )
}
export default PrevBtn