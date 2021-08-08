import { Collapse } from "antd";
import SingleProductHeader from "../single-product-header/SingleProductHeader";
import DescriptionCollapse from "./collapse-components/DescriptionCollapse";
import IngredientsCollapse from "./collapse-components/IngredientsCollapse";
import VideoCollapse from "./collapse-components/Video";
import SwipeableCarousel from "./collapse-components/SwipeableCarousel";
import TextComponent from "./text-components/TextComponent";
import SingleProductHeaderMobile from "../single-product-header/SingleProductHeaderMobile";

const RightProductText = (product) => {
  const { elem } = product;
  const { Panel } = Collapse;
  const dataofCollapse = [
    {
      type: "list",
      title: "beschreibung",
      component: <DescriptionCollapse elem={elem} />,
    },
    {
      type: "text",
      title: "inhaltsstoffe",
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
      title: "video",
      component: <VideoCollapse elem={elem} />,
    },
    {
      type: "carousel",
      title: "kollektion",
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
