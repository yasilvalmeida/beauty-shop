import { Space, Spin } from "antd";

const Loader = ({ type }) => {
  return (
    <>
      <div className={`loader__${type}`}>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </>
  );
};

export default Loader;