import Loader from "../../../../shareable/Loader";
import { useSelector } from "react-redux";
import Link from "next/link";

const SingleProductBottom = () => {
  const { styleData, styleLoading } = useSelector(
    (state) => state.singleProduct
  );
  return (
    <>
      {styleLoading ? (
        <Loader type={"component"} />
      ) : (
        <div className={"single-product-bottom"}>
          {styleData?.map((e, i) => {
            return (
              <div className={"single-product-bottom-element"} key={i}>
                <div className="single-product-bottom-element-img">
                  <Link href={`${e?.link}`}>
                    <a href={`${e?.link}`}>
                      <img
                        style={{ justifySelf: "center", marginBottom: "5rem" }}
                        src={`${e?.images?.url}`}
                      />
                    </a>
                  </Link>
                </div>

                <p>{e?.text}</p>
                <Link href={`${e.link}`}>
                  <a href={`${e.link}`}>{`${e?.link_text}`}</a>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SingleProductBottom;
