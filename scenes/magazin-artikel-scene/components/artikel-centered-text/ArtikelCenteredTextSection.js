import Image from "next/image";
const ArtikelCenteredSection = () =>{
    return(
        <div className={"artikel__centered__container"}>
            <h2>
                    Headline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eaque iure minus mollitia nesciunt
                numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
                Aliquam blanditiis distinctio fugit, iure pariatur perspiciatis reprehenderit ullam.Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Dignissimos eaque iure minus mollitia nesciunt
                numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
                non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eaque iure minus mollitia nesciunt
                numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
                Aliquam blanditiis distinctio fugit, iure pariatur perspiciatis reprehenderit ullam.Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Dignissimos eaque iure minus mollitia nesciunt
                numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
            </p>
            <div className={"artikel__centered__container__image"}>
                <Image src={"/magazin/centered/centered.png"} width={1104} height={835}/>
            </div>
            <span>
                Produkte und Bildbeschreibung 
            </span>
            <a href="#">Produkte shoppen</a>
        </div>
    )
}

export default ArtikelCenteredSection