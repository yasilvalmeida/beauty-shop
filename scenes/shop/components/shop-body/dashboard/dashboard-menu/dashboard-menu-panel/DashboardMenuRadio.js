import React, { useState } from 'react';
import { Radio } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {
  getShopProducts,
} from "../../../../../../../services/actions/shop";

const DashboardMenuRadio = ({ topic, data }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const radioStyle = {
    display: 'block',
    height: '20px',
    lineHeight: '30px',
  };

  const maxItemAllowed = 22;

  const onChange = (e) => {
    const parts = e.target.value.split("-");
    const filterType = parts[0];
    const filterId = parts[1];
    console.log("radio checked", e.target.value, filterType, filterId);
    setValue(e.target.value);
    dispatch(
      getShopProducts(
        10,
        maxItemAllowed
      ),
      null,
      0
    );
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="radio---">
      {data.map((item, i) => {
        return (
          <Radio value={`${topic}-${item.id}`} style={radioStyle} key={item.id}>
            <span className="radio__text" title={item.description}>
              {item.name}
            </span>
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default DashboardMenuRadio;
