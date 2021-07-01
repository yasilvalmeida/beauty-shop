import BeautyEssentialItem from "../../../../shareable/beauty-magaz-essentials/BeautyEssentialItem";

const BeautyEssentials = () =>{
    const essentials = [
        {
            small:"Travel",title:"Places To Go",text:"Lorem ipsum dolor sit amet, " +
                "consectetur adipisicing elit. Assumenda dolor, eos facere laborum " +
                "magnam maiores nam nulla officia, quam ratione recusandae.",date:"07.11. 2020",
            image:"/magazin/beauty-essentials/img1.png"
        }, {
            small:"Beauty",title:"Black is beautiful ",text:"Lorem ipsum dolor sit amet, " +
                "consectetur adipisicing elit. Assumenda dolor, eos facere laborum " +
                "magnam maiores nam nulla officia, quam ratione recusandae.",date:"07.11. 2020",
            image:"/magazin/beauty-essentials/img2.png"
        }, {
            small:"Well-beeing",title:"Rote roben Soll es regnen",text:"Lorem ipsum dolor sit amet, " +
                "consectetur adipisicing elit. Assumenda dolor, eos facere laborum " +
                "magnam maiores nam nulla officia, quam ratione recusandae.",date:"07.11. 2020",
            image:"/magazin/beauty-essentials/img3.png"
        }, {
            small:"Beauty",title:"Schluss mit müden augen",text:"Lorem ipsum dolor sit amet, " +
                "consectetur adipisicing elit. Assumenda dolor, eos facere laborum " +
                "magnam maiores nam nulla officia, quam ratione recusandae.",date:"07.11. 2020",
            image:"/magazin/beauty-essentials/img4.png"
        },

    ]
    return(
        <div className="beauty__essential__container">
            <div className={"beauty__essential__container__title"}>
                <h3>Beauty Essentials </h3>
            </div>
            <div className="beauty__essential__container__items">
                {essentials.map((e,i)=>{
                    return(
                        <div key={i} className={"beauty__essential__container__items__elem"}>
                            <BeautyEssentialItem elem={e}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default BeautyEssentials