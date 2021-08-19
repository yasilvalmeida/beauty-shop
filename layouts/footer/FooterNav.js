import Image from "next/image";

const FooterNav = ({ footerTop }) => {
  return (
    <>
      <div className={"nav-footer-body"}>
        <div className={"footer-nav-all "}>
          <div className={" footer-circled-bod"}>
            {footerTop
              .sort((a, b) => {
                return a?.id - b?.id;
              })
              .map((e, i) => {
                return (
                  <div className={"nav-top-items "} key={i}>
                    <div className={"footer-circled-persons"}>
                      <Image
                        src={`${e?.images?.url || "/dasparfum.jpg"}`}
                        width={83}
                        height={83}
                      />
                    </div>
                    <p className={"footer-nav-title"}>{e?.header}</p>
                    <p>{e?.text}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
