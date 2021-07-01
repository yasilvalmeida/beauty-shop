import ComponentHeader from "../../../../../shareable/component-header/ComponentHeader";
import MediatekInfoMagazin from "./mediatek-info/MediatekInfoMagazin";

const MagazinComponentHeader = () =>{
    const bg = "rgba(0,0,0,.5)"
    const color = "white"
    const color2 = "black"
    const textstyle="uppercase"
    return(
        <div className={"magazin__container__header"}>
            <ComponentHeader
                info='düfte. Pflege. Leben. Luxus.'
                title='Das DPAB Magazin'
                bg={bg}
                color={color}
                color2={color2}
                textstyle={textstyle}
            />
            <MediatekInfoMagazin/>
        </div>
    )
}

export default MagazinComponentHeader