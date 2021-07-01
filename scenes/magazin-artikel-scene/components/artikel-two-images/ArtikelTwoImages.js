import Image from "next/image";
const ArtikelTwoImages = () =>{
    return(
        <div className={"artikel__two__images__container"}>
            <div className={"artikel__two__images__container__text"}>
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
            </div>
            <div className={"artikel__two__images__container__images"}>
                <div className={"artikel__two__images__container__images__image"}>
                   <div className={"artikel__two__images__container__images__image--item1"}>
                       <Image src={"/magazin/artikeltwoimages/image2.png"} width={535} height={715} layout={"responsive"}/>
                   </div>
                   <div className={"artikel__two__images__container__images__image--item2"}>
                       <Image src={"/magazin/artikeltwoimages/image1.png"} width={535} height={715} layout={"responsive"}/>
                   </div>
                </div>
                <div className="artikel__two__images__container__images__text">
                    <p>Produkte und Bildbeschreibung </p>
                    <a href="#">Produkte shoppen</a>
                </div>
            </div>
            <div className={"artikel__two__images__container__text2"}>
                <i>
                    „amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invindit.“
                </i>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eaque iure minus mollitia nesciunt
                    numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                    non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
                    Aliquam blanditiis distinctio fugit, iure pariatur perspiciatis reprehenderit ullam.Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Dignissimos eaque iure minus mollitia nesciunt
                    numquam porro provident quas sed ut. Ad delectus deleniti dolorem dolores doloribus error ipsam magnam
                    non odio officiis perspiciatis quod saepe sapiente, sunt suscipit temporibus voluptate, voluptatem.
                </p>
            </div>
        </div>
    )
}

export default ArtikelTwoImages