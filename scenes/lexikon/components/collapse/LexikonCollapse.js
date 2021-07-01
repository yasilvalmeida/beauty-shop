import {Collapse} from "antd";
import CollapseLeftImage from "./components/collapse-left-image/CollapseLeftImage";
import OnlyLeftText from "./components/only-left-text/OnlyLeftText";

const LexikonCollapse = () =>{
    const { Panel } = Collapse;
    const collapseData = [
        {theme:"A",component:<CollapseLeftImage/>},
        {theme:"B",component:<OnlyLeftText/>},
        {theme:"C",component:<CollapseLeftImage/>},
        {theme:"D",component:<OnlyLeftText/>},
        {theme:"E",component:<OnlyLeftText/>},
    ]
    return(
        <div className={"lexikon__collapse__container"}>
            {collapseData.map((e,i)=>{
                return(
                    <Collapse
                        key={i}
                        expandIconPosition='right'
                        ghost='true'
                    >
                        <Panel header={`LEXIKON THEMA ${e.theme}`} key={0} >
                            {e.component}
                        </Panel>
                    </Collapse>
                )
            })}
        </div>
    )
}

export default LexikonCollapse