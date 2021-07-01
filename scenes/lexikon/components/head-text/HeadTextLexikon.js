import HeadTextShareable from "../../../../shareable/about/head-text/HeadText";

const HeadTextLexikon = () =>{
    const text1 = "Alles, was du über parfum und beauty wissen willst."
    const text2 = "Beauty Lexikon"
    const text3="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n" +
        "                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
        "                justo duo dolores et ea rebum justo duo dolores et ea rebum justo duo dolores et ea rebum"
    return(
        <div className={"lexikon__headtext__container"}>
            <HeadTextShareable text1={text1} text2={text2} text3={text3}/>
        </div>
    )
}
export default HeadTextLexikon