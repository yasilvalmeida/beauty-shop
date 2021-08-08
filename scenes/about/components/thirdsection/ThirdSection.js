import AboutTwoProducts from "../../../../shareable/abouttwoproducts/AboutTwoProducts";

const ThirdSection = () =>{
    const products = [
        {image:"about/abprod1.png",link:"#"},
        {image:"about/abprod2.png",link:"#"},
        {image:"about/abprod3.png",link:"#"},
    ]
    return(
        <>
            <div className="third-about-section-all">

                <div className={"third-about-section-right"}>
                    <h2>
                        Meine pflege routine
                    </h2>
                    <p className={"f"}>
                        Nach dem Aufstehen gibt es für mich nichts schöneres als eine angenehme warme Dusche. Dabei
                        pflege ich meinen Körper am liebsten mit dem Duschgel Sea Breeze von Ligne St Barth. Sea Breeze
                        versetzt mich mit seinem aromatischen Duft immer direkt ans Meer. Für die Haarpflege nutze ich
                        das Shampoo und die Volume Mask von Swiss Haircare. Mit diesen Produkten hole ich das Beste aus
                        meinen Haaren heraus und pflege sie schonend. Mein Gesicht verwöhne ich mit der Honey Coconut
                        Mask von Earth tu Face. Sie reinigt meine Haut bis in die Tiefe und hinterlässt ein super
                        weiches Hautgefühl. Dank dem enthaltenen Lavendel wird die Zellregeneration angeregt und beugt
                        ersten Zeichen der Hautalterung vor. Anschließend klopfe ich sanft das Anti Aging Spray L’Eau de
                        Jour von Rivoli auf meine Haut auf. Diese versorgt die Haut nicht nur mit Hyaluron, sondern
                        duftet auch noch wunderbar frisch! Damit mein Make-Up auch wirklich perfekt für den Tag ist
                        trage ich den Anti Aging Primer von Dr. Barbara Sturm auf. Dieser wurde extra mit der Make-Up
                        Artistin Monika Blunder entwickelt und sorgt für einen geglätteten Teint. Den Primer möchte ich
                        auf keinen Fall in meiner Pflegeroutine missen. Um meinem Look den letzten Schliff zu geben
                        trage ich den Lippenstift Knutzen von und Gretel auf. Bei den Farben liebe ich es zu variieren.
                    </p>
                    <AboutTwoProducts products={products}/>
                </div>
                <div className={"third-about-section-left"}>
                    <div className={"liljana-div"} style={{backgroundImage:"url(/about/liljana.png)"}}></div>

                    <img src="/about/autograpliljana.png" alt="Liljanas autograph"/>
                    <p>
                        Gründerin und Geschäftsführerin von Das Parfum and Beauty
                    </p>
                </div>
            </div>
        </>
    )
}

export default ThirdSection