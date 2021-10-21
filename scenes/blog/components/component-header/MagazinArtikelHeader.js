import MagazinArtikelComponentHeader from "./head/MagazinArtikelComponentHeader";

const ArtikelComponentHeaderBody = () => {
  return (
    <div
      className={"component__header__body__all__artikel"}
      style={{ backgroundImage: "url(/magazin/artikel/artikelheader.png)" }}
    >
      <MagazinArtikelComponentHeader />
    </div>
  );
};

export default ArtikelComponentHeaderBody;
