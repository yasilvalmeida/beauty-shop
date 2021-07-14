const PagePagination = ({ next, prev, totalSize, current, maxAllowed }) => {
  return (
    <div className="pagination">
      <button
        onClick={prev}
        className={`pagination__prev ${
          current === 1 ? "pagination__disabled" : ""
        }`}
      >
        {"|< <"}
      </button>
      <span className={"pagination__pageNum"}>Seite {current}</span>
      <span className={`pagination__totalNum `}>
        von {Math.ceil(totalSize / maxAllowed)}
      </span>
      <button
        onClick={next}
        className={`pagination__next ${
          current === Math.ceil(totalSize / maxAllowed)
            ? "pagination__disabled"
            : ""
        }`}
      >
        {"> >|"}
      </button>
    </div>
  );
};

export default PagePagination;
