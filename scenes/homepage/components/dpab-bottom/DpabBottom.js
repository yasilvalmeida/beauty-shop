import {useSelector} from "react-redux";

const DpabBottom = () =>{
    const midfootData = useSelector((state) => state.navbar.midfoot)
   return(
       <>
           <div className={"dpab-bottom-body d-flex"} style={{marginTop:"12rem"}}>
               <div className={"dpab-bot-txt"}>
                   <h2>
                       {midfootData[0]?.header}
                   </h2>
                   <p className={"dpab-bot-head-bot"}>
                       {midfootData[0]?.text_1}
                   </p>
                   <p className={"dpab-bot-head-other"}>
                       {midfootData[0]?.text_2}
                   </p>
                   <p className={"dpab-bot-head-other"}>Telefon: <a href="tel:+4961739630853">+49 6173 963 0853</a></p>
               </div>
               <div style={{backgroundImage: `url(${midfootData[0]?.images?.url || '/dpabbottom.png'})`,backgroundSize:"cover"}} className={"dpab-bot-img"}></div>
           </div>
       </>
   )
}

export default DpabBottom