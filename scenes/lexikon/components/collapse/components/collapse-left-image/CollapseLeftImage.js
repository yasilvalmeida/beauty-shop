import Image from "next/image";
const CollapseLeftImage = () =>{
    return(
        <div className={"lexikon__collapse__left__container"}>
            <div className={"lexikon__collapse__left__container__image"}>
                <img src="/lexikon/lexikon.png" alt="lexikon"/>
                <div className={"lexikon__collapse__left__container__image--mobile"}>
                    <Image src={"/lexikon/lexikon.png"} width={1000} height={650}/>
                </div>
            </div>
            <div className={"lexikon__collapse__left__container__text"}>
                <h2>
                    Headline lore Epsom
                </h2>
                <p className={"el1"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore
                    m ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor
                    e et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et e
                    a rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ip
                    sum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebu
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore
                    m ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor
                    e et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et e
                    a rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ip
                </p>
            </div>
        </div>
    )
}

export default CollapseLeftImage