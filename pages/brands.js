import BrandsScene from "../scenes/brands";
import {useRouter} from "next/router";

const Brands = () => {
    const router = useRouter()

    return (
        <>
            <BrandsScene id={router.query}/>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Brands;