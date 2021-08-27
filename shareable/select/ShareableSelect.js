import { Select } from "antd";
import { useDispatch } from "react-redux";
import { getSingleProductVariantId } from "../../services/actions/single-product";

const ShareableSelect = ({
  defaultValue,
  value,
  data,
  setBottleId,
  product,
}) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  let defaultVariant = [];
  const handleChange = (value) => {
    dispatch(getSingleProductVariantId(value));
    setBottleId(value);
  };
  if (product?.variants_of_a_products?.length === 1) {
    defaultVariant = [...product?.variants_of_a_products];
  } else {
    defaultVariant = product?.variants_of_a_products?.filter((item) => {
      return item.main === true;
    });
    getSingleProductVariantId(
      product?.variants_of_a_products?.filter((item) => {
        return item.main === true;
      })[0].id
    );
  }
  return (
    <Select
      defaultValue={
        defaultVariant?.length > 0 ? defaultVariant[0]?.bottle_sizes : 0
      }
      value={defaultValue}
      size={value}
      onChange={handleChange}
    >
      {data?.variants_of_a_products?.map((e, i) => {
        return (
          <Option key={i} value={e?.id}>
            {e?.number}
          </Option>
        );
      })}
    </Select>
  );
};
export default ShareableSelect;
