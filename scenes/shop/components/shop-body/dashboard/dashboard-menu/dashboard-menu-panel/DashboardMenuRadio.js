import React, { useState } from 'react';
import { Radio } from 'antd';

const DashboardMenuRadio = ({ data }) => {
  const [value, setValue] = useState(0);

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} className='radio---'>
      {data.map((item, i) => {
        return (
          <Radio value={item.id} style={radioStyle} key={item.id} >
            <span className='radio__text' title={item.description}>{item.name}</span>
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default DashboardMenuRadio;
