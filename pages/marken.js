import MarkenScene from "../scenes/marken";

const Marken = () => {
    return (
        <>
            <MarkenScene/>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Marken;
