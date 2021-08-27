import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LexikonSelect from "./LexikonSelect";
import { useSelector } from "react-redux";

const LexikonFilter = ({ handleChange }) => {
  const { lexikonPageTextData } = useSelector((state) => state.lexikon);
  return (
    <div className={"lexikon__filter__container"}>
      <div className={"lexikon__filter__container__search"}>
        <FontAwesomeIcon icon={faSearch} className={"searchlexikon"} />
        <input type="text" placeholder={lexikonPageTextData?.search} />
      </div>
      <LexikonSelect defaultValue="A-Z" handleChange={handleChange} />
    </div>
  );
};

export default LexikonFilter;
