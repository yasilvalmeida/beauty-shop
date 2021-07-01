import {Popover} from "antd";
import React from "react";
const CustomStep = ( { status, index }) => {
   return (
        <Popover
            content={
                <span>
                step {index} status: {status}
                </span>
            }
        >
               <div className={"custom-step"}>
                   <p>{index}</p>
               </div>

        </Popover>
    );
}

export default CustomStep
