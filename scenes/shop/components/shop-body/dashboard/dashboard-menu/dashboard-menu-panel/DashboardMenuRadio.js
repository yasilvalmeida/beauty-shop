import React, { useEffect, useState } from "react";
import { Radio } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {
  getShopProducts,
} from "../../../../../../../services/actions/shop";

const DashboardMenuRadio = ({
  topic,
  data,
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  brand,
  category
}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(
    brand ? `MARKEN-${brand}` : category ? `KATEGORIEN-${category}` : 0
  );

  const radioStyle = {
    display: "block",
    height: "20px",
    lineHeight: "30px",
  };

  useEffect(() => {
    if (category) {
      setValue(`KATEGORIEN-${category}`);
    }
  }, [category]);

  useEffect(() => {
    if (brand) {
      setValue(`MARKEN-${brand}`);
    }
  }, [brand]);

  const onChange = (e) => {
    const parts = e.target.value.split("-");
    const filterType = parts[0];
    const filterId = parseInt(parts[1]);
    setValue(e.target.value);
    setFilterType(filterType);
    setFilterId(filterId);
    setCurrent(1);
    scrollToref.current.scrollIntoView();
    dispatch(getShopProducts(current, maxItemAllowed, filterType, filterId));
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
