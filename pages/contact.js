import ContactScene from "../scenes/contact";

const Contact = () => {
    return (
        <>
            <ContactScene/>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Contact
