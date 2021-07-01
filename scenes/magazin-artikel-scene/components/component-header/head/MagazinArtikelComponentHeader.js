import ComponentHeader from "../../../../../shareable/component-header/ComponentHeader";
import MediatekInfoMagazinArtikel from "../mediatek-info/MediatekInfoMagazin";
// import MediatekInfoMagazin from "./mediatek-info/MediatekInfoMagazin";

const MagazinArtikelComponentHeader = () =>{
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
            <MediatekInfoMagazinArtikel/>
        </div>
    )
}

export default MagazinArtikelComponentHeader