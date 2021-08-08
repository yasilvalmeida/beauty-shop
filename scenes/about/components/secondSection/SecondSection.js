import AboutTwoProducts from "../../../../shareable/abouttwoproducts/AboutTwoProducts";

const SecondAboutSection = () =>{
    const products = [
        {image:"about/abprod1.png",link:"#"},
        {image:"about/abprod2.png",link:"#"},
        {image:"about/abprod3.png",link:"#"},
    ]
    return(
        <>
            <div className="second-about-section-all">
                <div className={"second-about-section-left"}>
                    <div className={"liljana-div"} style={{backgroundImage:"url(/about/liljana.png)"}}></div>

                    <img src="/about/autograpliljana.png" alt="Liljanas autograph"/>
                    <p>
                        Gründerin und Geschäftsführerin von Das Parfum and Beauty
                    </p>
                </div>
                <div className={"second-about-section-right"}>
                    <h2>
                        Mein Pflegeritual von Kopf bis Fu<span>&Beta;</span>
                    </h2>
                    <p className={"f"}>
                        Die Reinigung beginne ich immer mit dem Schaum von Nuori. Dieser entfernt perfekt mein
                        Augen Make-up, solange es kein wasserfestes Make-Up ist. Dank spezieller Wirkstoffe pflegt
                        es die Haut glatt und strahlend. Für mich kommt kein anderer Reinigungsschaum in Frage!
                        Dieser ist zudem auch noch rein organisch. Das L’eau de Jour von Rivoli gebe ich an heißen
                        Tagen einfach in meine Handflächen und man spürt regelrecht das Hyaluron zwischen den
                        Fingern. Sanft auf die Haut einklopfen. Für meine Augen nutze ich den Eye Cream Complex
                        von Kat Burki. Die Pflege ist reichhaltig und perfekt geeignet für die dünne und empfindliche
                        Haut um die Augen herum. An kalten Tagen nutze ich gerne eine reichhaltige Tagespflege, wie
                        beispielsweise die Tagespflege von Nutrifill von Bakel, oder kreiere meine eigene persönliche
                        Schönheits Mixtur. Hierfür verwende ich 2 Tropfen der Glow Drops von Dr. Barbara Sturm gemischt
                        mit einem Tropfen A4 Golden Face Oil. Die Haut wirkt danach strahlend schön und geschmeidig.
                        Damit meine Haut auch über Nacht perfekt gepflegt wird, nutze ich die BYNACHT Produkte.
                        Besonders gerne wende ich das High Moon Firming Decolleté Gel an. Unser Dekolleté ist der
                        Sonne und anderen Umwelteinflüssen fast genauso häufig ausgesetzt wie unser Gesicht. Doch
                        leider vernachlässigen wir die Pflege dieser speziellen Partie. Das Alter einer Frau erkennt
                        man meist an ihren Händen oder dem Dekolleté. Also immer gut pflegen!
                        Mein absoluter Geheimtipp für porenfeine Haut sind die Alpha Beta Peel Pads von Dr. Dennis Gross.
                    </p>
                    <p>
                        Ich kann nicht ohne mein Kokosöl von Ligne St Barth. Nachdem ich mich unter der Dusche mit dem
                        Papaya Peeling eingerieben habe, folgt das Kokosöl auf noch nasser Haut.
                        Dieses dusche ich im Anschluss nicht mehr ab, sondern tupfe mich lediglich sanft trocken. Das
                        erspart das nachträgliche eincremen. Eine gute Fußpflege darf nicht fehlen. Ich verwende das Body
                        Balm von Earth tu Face, welches 100% natürlich und organisch ist und exklusiv bei Das Parfum and
                        Beauty erhältlich ist. Ich persönlich nutze es gerne für meine Füße oder im Winter für trockene
                        Stellen. Absoluter Beauty Tipp: Vor dem Schlafen gehen ein schönes Fußbad mit dem Earth tu Face
                        Salt Scrub Peeling nehmen und anschließend die Lotion dick eincremen. Zum Erleichtern des Einschlafens
                        gebe ich gerne das Amly Spray auf mein Kissen. Schön im Schlaf.
                    </p>
                    <AboutTwoProducts products={products}/>
                </div>
            </div>
        </>
    )
}

export default SecondAboutSection