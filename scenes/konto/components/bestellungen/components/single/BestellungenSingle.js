import BestellungSingleTop from "./components/top/BestellungSingleTop";
import BestellungSingleMiddle from "./components/middle/BestellungSingleMiddle";
import BestellungSingleBottom from "./components/bottom/BestellungSingleBottom";

const BestellungenSingle = ({elem,setShow}) => {
    console.log(elem)
    const {e}=elem
    return (
        <div className={"bestellungen__single"}>
            <h2 className={"bestellungen__single__title"}>Deine Bestellung: {e.code}</h2>
            <BestellungSingleTop e={e} setShow={setShow}/>
            <BestellungSingleMiddle e={e}/>
            <BestellungSingleBottom e={e}/>
        </div>
    )
}

export default BestellungenSingle