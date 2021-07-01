import StepOneSingleProduct from "../../../../../shareable/Products/checkout-ptoducts/step-one/StepOneSingleProduct";
import StepOneModal from "../step-one/modal/StepOneModal";

const StepFour = ({next}) => {
    const data = [1,2,3]
    return(
        <div className={"checkout__stepfour__container"}>
           <div className={"checkout__stepfour__container__title"}>
               <p>Vielen Dank für deine Bestellung!</p>
               <p className={"checkout__stepfour__container__title__print"}>
                   Drucken
                   <svg xmlns="http://www.w3.org/2000/svg" width="37.997" height="38.5" viewBox="0 0 37.997 38.5" className={"svg"}>
                       <g id="printer" transform="translate(7953.5 -6147.5)">
                           <path id="Union_21" data-name="Union 21" d="M6.292,37.5V30.453H2.456A2.459,2.459,0,0,1,0,28V12.523a2.46,2.46,0,0,1,2.456-2.456H6.292V0H30.7V10.067H34.54A2.46,2.46,0,0,1,37,12.523V28a2.46,2.46,0,0,1-2.457,2.456H30.7V37.5ZM7.55,36.242h21.9V21.392H7.55Zm26.99-7.047a1.2,1.2,0,0,0,1.2-1.2V12.523a1.2,1.2,0,0,0-1.2-1.2H2.456a1.2,1.2,0,0,0-1.2,1.2V28a1.2,1.2,0,0,0,1.2,1.2H6.292v-9.06H30.7v9.06ZM7.55,10.067h21.9V1.258H7.55Zm22.525,5.411a1.251,1.251,0,0,1,.629-1.087v2.174A1.252,1.252,0,0,1,30.075,15.478Z" transform="translate(-7953 6148)" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
                           <g id="Group_5003" data-name="Group 5003" transform="translate(-7942.304 6172.287)">
                               <rect id="Rectangle_1295" data-name="Rectangle 1295" width="15.604" height="1.51" rx="0.755" transform="translate(0 0)"/>
                           </g>
                           <g id="Group_5004" data-name="Group 5004" transform="translate(-7942.304 6178.831)">
                               <rect id="Rectangle_1296" data-name="Rectangle 1296" width="15.604" height="1.51" rx="0.755" transform="translate(0 0)"/>
                           </g>
                           <g id="Group_5005" data-name="Group 5005" transform="translate(-7942.304 6175.559)">
                               <rect id="Rectangle_1297" data-name="Rectangle 1297" width="12.584" height="1.51" rx="0.755" transform="translate(0)"/>
                           </g>
                           <g id="Group_5006" data-name="Group 5006" transform="translate(-7923.679 6162.22)">
                               <path id="Path_9550" data-name="Path 9550" d="M135.517,196.258a1.259,1.259,0,0,1-1.258,1.258,1.2,1.2,0,0,1-.629-.171,1.254,1.254,0,0,1,0-2.174,1.2,1.2,0,0,1,.629-.171A1.259,1.259,0,0,1,135.517,196.258Z" transform="translate(-133 -195)"/>
                           </g>
                       </g>
                   </svg>
               </p>
           </div>
            <div className={"checkout__stepfour__container__products"}>
                {data.map((e,i)=>{
                    return(
                        <StepOneSingleProduct key={i}/>
                    )
                })}
            </div>
            <div className={"checkout__stepone__container__bottom"}>
                <p className={"checkout__stepone__container__bottom--title"}>Bestellübersicht</p>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text"}>
                        Zwischensumme
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price"}>
                        € 23,33
                    </p>
                </div>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text"}>
                        MwST.
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price"}>
                        € 4,67
                    </p>
                </div>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text last-checkout-one-step-txt"}>
                        Gesamtsumme
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price last-checkout-one-step-price"}>
                        € 28,00
                    </p>
                </div>

            </div>
            <div className={"checkout__steptwo__container__address"}>
                <div className={"checkout__steptwo__container__address__item"}>
                    <p className={"checkout__steptwo__container__address__item--title"}>
                        Lieferadresse
                    </p>
                    <div className={"checkout__steptwo__container__address__item__body"}>
                        <div className={"checkout__steptwo__container__address__item__body__top"}>
                            <p className={"first__child"}>
                                Max Muster
                            </p>
                            <p>
                                Muster Firma AG
                            </p>
                        </div>
                        <div className={"checkout__steptwo__container__address__item__body__mid"}>
                            <p>
                                Musterstrasse 123
                            </p>
                            <p>
                                Musterstadt 12345
                            </p>
                            <p>
                                Musterland
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"checkout__steptwo__container__address__item"}>
                    <p className={"checkout__steptwo__container__address__item--title"}>
                        Rechnungsadresse
                    </p>
                    <div className={"checkout__steptwo__container__address__item__body"}>
                        <div className={"checkout__steptwo__container__address__item__body__top"}>
                            <p className={"first__child"}>
                                Max Muster
                            </p>
                            <p>
                                Muster Firma AG
                            </p>
                        </div>
                        <div className={"checkout__steptwo__container__address__item__body__mid"}>
                            <p>
                                Musterstrasse 123
                            </p>
                            <p>
                                Musterstadt 12345
                            </p>
                            <p>
                                Musterland
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepFour