const PagePagination = ({next,prev,totalSize,current}) => {
  return (
    <div className='pagination'>
        <button onClick={prev} className={`pagination__prev ${current === 1 ? "pagination__disabled" : ""}`}>{"|< <"}</button>
        <span className={"pagination__pageNum"}>Seite {current}</span>
        <span className={`pagination__totalNum `}>von {Math.ceil(totalSize/21)}</span>
        <button onClick={next} className={`pagination__next ${current === Math.ceil(totalSize/21) ? "pagination__disabled" : ""}`}>{"> >|"}</button>
    </div>
  );
};

export default PagePagination;
