import InspirationBottomOneRep from "../../../shareable/InsprationBottomOneRep";

const InspirationBottomOne = ({ inspiration }) =>{
    const background = "black"
    const color = "white"
    return(
        <>
            <InspirationBottomOneRep 
                inspiration={inspiration} 
                background={background} 
                color={color}
            />
        </>
    )
}
export default InspirationBottomOne