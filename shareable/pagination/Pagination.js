import { faStepBackward, faArrowLeft, faArrowRight, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PagePagination = ({ begin, prev, next, end, totalSize, current, maxAllowed }) => {
  return (
    <div className="pagination">
      <button
        onClick={begin}
        className={`pagination__prev ${
          current === 1 ? "pagination__disabled" : ""
        }`}
      >
        <FontAwesomeIcon icon={faStepBackward} className={"head-search-icon"} />
      </button>
      <button
        onClick={prev}
        className={`pagination__prev ${
          current === 1 ? "pagination__disabled" : ""
        }`}
      >
        <FontAwesomeIcon icon={faArrowLeft} className={"head-search-icon"} />
      </button>
      <span className={"pagination__pageNum"}>Seite {current}</span>
      <span className={`pagination__totalNum `}>
        von{" "}
        {Math.ceil(totalSize / maxAllowed) > 0
          ? Math.ceil(totalSize / maxAllowed) - 1
          : Math.ceil(totalSize / maxAllowed)}
      </span>
      <button
        onClick={next}
        className={`pagination__next ${
          current === Math.ceil(totalSize / maxAllowed) - 1
            ? "pagination__disabled"
            : ""
        }`}
      >
        <FontAwesomeIcon icon={faArrowRight} className={"head-search-icon"} />
      </button>
      <button
        onClick={end}
        className={`pagination__next ${
          current === Math.ceil(totalSize / maxAllowed) - 1
            ? "pagination__disabled"
            : ""
        }`}
      >
        <FontAwesomeIcon icon={faStepForward} className={"head-search-icon"} />
      </button>
    </div>
  );
};

export default PagePagination;
