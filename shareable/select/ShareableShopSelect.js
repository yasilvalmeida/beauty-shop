import {Select} from "antd";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";


const ShareableShopSelect = ({defaultValue, valuesData, setByPrice, setByName, setByNew,val}) => {
    const {Option} = Select;
    const handleChange = (value, event) => {
        switch (event.name) {
            case "PRIES" :
                setByPrice(value);
                break
            case "NAME" :
                setByName(value);
                break
            default:
                break
        }
    }

    return (
        <Select
            defaultValue={defaultValue}
            size={"large"}
            style={{width: 120}}
            onChange={handleChange}
        >
            {valuesData.map((e) => {
                return (
                    <Option key={e}  name={defaultValue}>
                        {e}
                    </Option>
                )
            })}
        </Select>
    );
};

export default ShareableShopSelect;
