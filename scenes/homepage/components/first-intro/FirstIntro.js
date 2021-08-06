import {getHomePageSctOne} from "../../../../services/actions/homepage__stable";
import { useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Link from "next/link";

const FirstIntro = () =>{

  const HPFS = useSelector(state => state.navbar.homePageSctOne);
  const homepageIntro = HPFS.find(p => p.position === 'HomePage');
  const shopUrl = "/shop";
  return (
    <>
      <div className={"first-intro "}>
        <div className={"first-intro-body "}>
          <div className={"first-intro-bod-left"}>
            <div>
              <p className={"intro-small-txt"}>{homepageIntro?.header}</p>
              <h2 className={"intro-big-txt"} style={{ cursor: "text" }}>
                {homepageIntro?.title}
              </h2>
            </div>
            <Link href={`${shopUrl}`}>
              <a href={shopUrl}>
                <button>{homepageIntro?.button_text}</button>
              </a>
            </Link>
          </div>
          <div className={"first-intro-bod-right"}>
            {!homepageIntro?.images?.url ? (
              <img src="/first1.jpg" />
            ) : (
              <img src={`${homepageIntro?.images?.url}`} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstIntro