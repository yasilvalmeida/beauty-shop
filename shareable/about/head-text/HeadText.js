const HeadTextShareable = ({text1,text2,text3}) =>{

    return(
        <>
           <div className={"about-two-head-text"}>
               <p className={'text-one'}>
                   {text1}
               </p>
               <h2 className={'text-two-big'}>
                   {text2}
               </h2>
               <span className={'text-three-long'}>
                   {text3}
               </span>
           </div>
        </>
    )
}

export default HeadTextShareable