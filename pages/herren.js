import HerrenScene from "../scenes/herren";
const Herren = () => {
    return (
        <>
            <HerrenScene/>
        </>
    );
}
export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Herren