import VersandartenScene from "../scenes/versandarten/index"
const Versandarten = () => {
    return (
        <>
            <VersandartenScene />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Versandarten
