import { Collapse } from "antd";
import SingleProductHeader from "../single-product-header/SingleProductHeader";
import SwipeableCarousel from "./collapse-components/SwipeableCarousel";
import DescriptionCollapse from "./collapse-components/DescriptionCollapse";
import IngredientsCollapse from "./collapse-components/IngredientsCollapse";
import VideoCollapse from "./collapse-components/Video";
import TextComponent from "./text-components/TextComponent";
import SingleProductHeaderMobile from "../single-product-header/SingleProductHeaderMobile";
import { useSelector } from "react-redux";

const RightProductText = (product) => {
  const { elem } = product;
  const { Panel } = Collapse;
  const { singleProductPageTextData } = useSelector(
    (state) => state.singleProduct
  );
  const dataofCollapse = [
    {
      type: "list",
      title: singleProductPageTextData?.description || "beschreibung",
      component: <DescriptionCollapse elem={elem} />,
    },
    {
      type: "text",
      title: singleProductPageTextData?.ingredients || "inhaltsstoffe",
      component: <IngredientsCollapse elem={elem} />,
    },
    /* { type: "list", title: "inhaltsstoffe", component: <ListedText /> }, */
    /* {
      type: "text",
      title: "duftanlasse",
      component: <SimpleText elem={elem} />,
    }, */
    {
      type: "video",
      title: singleProductPageTextData?.video || "video",
      component: <VideoCollapse elem={elem} />,
    },
    {
      type: "carousel",
      title: singleProductPageTextData?.image || "kollektion",
      component: <SwipeableCarousel elem={elem} />,
    },
  ];
  return (
    <>
      <div className={"right-product-body-all"}>
        <SingleProductHeader />
        <SingleProductHeaderMobile />
        <div className={"right-product-collapse-body"}>
          {dataofCollapse.map((e, i) => {
            return (
              <Collapse key={i} expandIconPosition="right" ghost="true">
                <Panel header={e.title} key={i}>
                  {e.component}
                </Panel>
              </Collapse>
            );
          })}
        </div>
        <TextComponent />
      </div>
    </>
  );
};

export default RightProductText;
