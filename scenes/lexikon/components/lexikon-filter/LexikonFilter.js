import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LexikonFilter = () =>{
    return(
        <div className={"lexikon__filter__container"}>
            <div className={"lexikon__filter__container__search"}>
                <FontAwesomeIcon icon={faSearch} className={"searchlexikon"}/>
                <input type="text" placeholder={"SUCHE"}/>
            </div>
            <ShareableSelect defaultValue='A-Z'/>
        </div>
    )
}

export default LexikonFilter