import { useSelector } from "react-redux";

const TextComponent = () => {
  const { singleProductPageTextData } = useSelector(
    (state) => state.singleProduct
  );
  return (
    <>
      <div className={"text-component-body"}>
        <p className={"text1"}>{singleProductPageTextData?.text_one}</p>
        <p className={"text2"}>{singleProductPageTextData?.text_two}</p>
        <p className={"text3"}>
          {singleProductPageTextData?.text_three}
          <br />
          <a href={`mailto:${singleProductPageTextData?.email_address}`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className={"letter-svg"}
              >
                <rect
                  x="48"
                  y="96"
                  width="416"
                  height="320"
                  rx="40"
                  ry="40"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <polyline
                  points="112 160 256 272 400 160"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
              E-MAIL
            </span>
          </a>
        </p>
      </div>
    </>
  );
};

export default TextComponent;
