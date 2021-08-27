import { Collapse } from "antd";
import CollapseLeftImage from "./components/collapse-left-image/CollapseLeftImage";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";

const LexikonCollapse = ({ theme }) => {
  const { lexikonThemeData } = useSelector((state) => state.lexikon);
  const { Panel } = Collapse;
  const scrollToref = useRef();
  return (
    <div className={"lexikon__collapse__container"} ref={scrollToref}>
      {lexikonThemeData?.map((e, i) => {
        return (
          <>
            <Collapse
              key={e?.theme}
              expandIconPosition="right"
              ghost="true"
              activeKey={`${theme}`}
              destroyInactivePanel={true}
            >
              <Panel header={`LEXIKON THEMA ${e.theme}`} key={e?.theme}>
                <CollapseLeftImage data={e} />
              </Panel>
            </Collapse>
          </>
        );
      })}
    </div>
  );
};

export default LexikonCollapse;
