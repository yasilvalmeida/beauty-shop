import HeadTextShareable from "../../../../shareable/about/head-text/HeadText";

const HeadText = () =>{
       const text1="Gegründet aus der Leidenschaft zu hochwertigen Parfums und Kosmetik."
       const text2="Das beauty team"
       const text3="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n" +
        "                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
        "                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
        "                sit amet. Lorem ipsum dolor sit amet."

    return(
        <>
           {/*<div className={"about-two-head-text"}>*/}
           {/*    <p className={'text-one'}>*/}
           {/*        Gegründet aus der Leidenschaft zu hochwertigen Parfums und Kosmetik.*/}
           {/*    </p>*/}
           {/*    <h2 className={'text-two-big'}>*/}
           {/*        Das beauty team*/}
           {/*    </h2>*/}
           {/*    <span className={'text-three-long'}>*/}
           {/*     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut*/}
           {/*     labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et*/}
           {/*     justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor*/}
           {/*     sit amet. Lorem ipsum dolor sit amet.*/}
           {/* </span>*/}
           {/*</div>*/}
           <HeadTextShareable text1={text1} text2={text2} text3={text3}/>
        </>
    )
}

export default HeadText