import MagazinComponentHeader from "./component-header/ComponentHeader";
import ComponentHeaderBottom from "./component-header/component-header-bottom/ComponentHeaderBottom";
import ComponentHeaderBottomMobile from "./component-header/component-header-bottom/ComponentHeaderBottomMobile";

const ComponentHeaderBody = () =>{
    return(
        <div className={"component__header__body__all"} style={{backgroundImage:"url(/magazin/magazinbackground.png)"}}>
            <MagazinComponentHeader/>
            <ComponentHeaderBottomMobile/>
            <ComponentHeaderBottom/>
        </div>
    )
}

export default ComponentHeaderBody