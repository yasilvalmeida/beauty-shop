import React from 'react';
import { Radio } from 'antd';

const DashboardMenuRadio = ({ onChange, value,data }) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <Radio.Group onChange={onChange} value={value} className='radio---'>
      {data.map((item, i) => {
        return (
          <Radio value={item.name} style={radioStyle} key={i}>
            <span className='radio__text'>{item.name}</span>
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default DashboardMenuRadio;
