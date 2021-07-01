import MagazinArtikelComponentHeader from "./head/MagazinArtikelComponentHeader";
import TextPart from "./text-part/TextPart";

const ArtikelComponentHeaderBody = () =>{
    return(
        <div className={"component__header__body__all__artikel"} style={{backgroundImage:"url(/magazin/artikel/artikelheader.png)"}}>
            <MagazinArtikelComponentHeader/>
        </div>
    )
}

export default ArtikelComponentHeaderBody