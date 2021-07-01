import {Collapse} from 'antd';
import SingleProductHeader from "../single-product-header/SingleProductHeader";
import SimpleText from "./collapse-components/SimpleText";
import ListedText from "./collapse-components/ListedText";
import VideoCollapse from "./collapse-components/Video";
import SwipeableCarousel from "./collapse-components/SwipeableCarousel";
import TextComponent from "./text-components/TextComponent";
import SingleProductHeaderMobile from "../single-product-header/SingleProductHeaderMobile";

const RightProductText = () => {
    const {Panel} = Collapse;
    const dataofCollapse = [
        {type: "list", title: "beschreibung", component: <ListedText/>},
        {type: "text", title: "inhaltsstoffe", component: <SimpleText/>},
        {type: "list", title: "inhaltsstoffe", component: <ListedText/>},
        {type: "text", title: "duftanlasse", component: <SimpleText/>},
        {type: "video", title: "video", component: <VideoCollapse/>},
        {type: "carousel", title: "kollektion", component: <SwipeableCarousel/>},
    ]
    return (
        <>
            <div className={"right-product-body-all"}>
                <SingleProductHeader/>
                <SingleProductHeaderMobile/>
                <div className={"right-product-collapse-body"}>
                    {dataofCollapse.map((e, i) => {
                        return (
                            <Collapse
                                key={i}
                                expandIconPosition='right'
                                ghost='true'
                            >
                                <Panel header={e.title} key={i}>
                                    {e.component}
                                </Panel>
                            </Collapse>
                        )
                    })}
                </div>
                <TextComponent/>
            </div>
        </>
    )
}

export default RightProductText