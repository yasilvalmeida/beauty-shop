import InspirationBottomTwoRep from "../../../shareable/InspirationBottomTwoRep";

const InspirationBottomTwo = ({ inspiration }) =>{
    const background = "black"
    const color = "white"
    const padding = "10vh"
    return(
        <>
            <InspirationBottomTwoRep background={background} color={color} padding={padding} inspiration={inspiration} />
        </>
    )
}
export default InspirationBottomTwo