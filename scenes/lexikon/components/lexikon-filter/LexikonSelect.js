import { Select } from "antd";
import { useSelector } from "react-redux";

const LexikonSelect = ({ defaultValue, handleChange }) => {
  const { lexikonThemeData } = useSelector((state) => state.lexikon);
  const { Option } = Select;
  return (
    <Select
      defaultValue={defaultValue}
      value={defaultValue}
      onChange={handleChange}
    >
      {lexikonThemeData?.map((e, i) => {
        return (
          <Option key={i} value={e?.theme}>
            {e?.theme}
          </Option>
        );
      })}
    </Select>
  );
};
export default LexikonSelect;
