import Social from "../../../../../shareable/social/Social";
import { useRef } from "react";
import { useSelector } from "react-redux";

const ModalWhishlist = ({ show, setShow }) => {
  const { kontoPageTextData } = useSelector((state) => state.konto);
  const inp = useRef();
  const text = useRef();
  const copy = "https://dpab.de/user123456789/wishlist/65328986";
  const copyLinkDataHandler = () => {
    text.current.select();
    document.execCommand("copy");
  };
  return (
    <div
      style={show ? { display: "block" } : { display: "none" }}
      className={"whishlist__modal__container"}
    >
      <div className={"whishlist__modal__container__body"}>
        <h2>{kontoPageTextData?.wishlist_modal_header}</h2>
        <p>{kontoPageTextData?.wishlist_modal_title}</p>
        <div className={"whishlist__modal__container__body__copy"}>
          <input
            type="text"
            defaultValue={"https://dpab.de/user123456789/wishlist/65328986"}
            ref={inp}
            onClick={copyLinkDataHandler}
          />
          <button onClick={copyLinkDataHandler}>
            {kontoPageTextData?.wishlist_modal_copy_link}
          </button>
        </div>
        <textarea
          name="area"
          id="area"
          cols="30"
          rows="10"
          style={{
            opacity: "0",
            textTransform: "lowercase",
            width: "0",
            height: "0",
          }}
          value={copy}
          ref={text}
          onChange={() => {
            return;
          }}
        />
        <Social />
        <p className={"close"} onClick={() => setShow(false)}></p>
      </div>
    </div>
  );
};

export default ModalWhishlist;
