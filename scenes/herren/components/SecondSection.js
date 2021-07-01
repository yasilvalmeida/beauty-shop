import FirstAddSection from "../../../shareable/FirstAddSection";

const SecondSection = ({ firstData, secondData }) =>{
    const background="black"
    const image1="/harren2section2.png"
    const image2="/harren2section1.png"
    const textcolor = "white"
    const padding = "105px"

    return(
        <>
            <FirstAddSection 
                background={background} 
                image1={image1} 
                image2={image2} 
                textcolor={textcolor} 
                padding={padding}
                firstData={firstData}
                secondData={secondData}
            />
        </>
    )
}

export default SecondSection