import Social from "../../../../../shareable/social/Social";
import {useRef,useState} from "react"
const ModalWhishlist = ({show,setShow}) =>{
    const inp = useRef()
    const text = useRef()
    const copy = "https://dpab.de/user123456789/wishlist/65328986"
    const copyLinkDataHandler = () =>{
        text.current.select()
        document.execCommand("copy")
    }
    return(
        <div style={show ? {display:"block"}:{display:"none"}} className={"whishlist__modal__container"}>
            <div className={"whishlist__modal__container__body"}>
                <h2>Teile deine wishlist</h2>
                <p>Kopiere einfach den link und sende ihn an deine freunde.</p>
                <div className={"whishlist__modal__container__body__copy"}>
                    <input type="text" defaultValue={"https://dpab.de/user123456789/wishlist/65328986"} ref={inp} onClick={copyLinkDataHandler}/>
                    <button onClick={copyLinkDataHandler}>Link kopieren</button>
                </div>
                <textarea name="area" id="area" cols="30" rows="10"
                  style={
                            {
                                opacity:"0",
                                textTransform:"lowercase",
                                width:"0",
                                height:"0"
                            }
                        }
                          value={copy}
                          ref={text}
                onChange={()=> {
                    return
                }}/>
                <Social/>
                <p className={"close"} onClick={()=>setShow(false)}></p>
            </div>
        </div>
    )
}

export default ModalWhishlist