import CarouselArtikel from "../../scenes/magazin-artikel-scene/components/carousel/CarouselArtikel";
const MagazinElement = () => {
    return (
        <>
           <CarouselArtikel/>
        </>
    );
}
export async function getStaticProps() {
    return {
        props:{}
    };
}

export async function getStaticPaths() {
    return {
        paths:[
            {params: {id: "gallery"}},
        ],
        fallback:false
    };
}

export default MagazinElement