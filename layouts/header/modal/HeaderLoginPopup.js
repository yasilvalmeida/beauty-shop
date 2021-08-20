import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const HeaderLoginPopup = ({
  isModalVisible,
  setIsModalVisible,
  headerPageText,
}) => {
  const router = useRouter();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={headerPageText?.modal_login_title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={950}
      footer={[
        <button
          className={"checkout-modal-btn"}
          key={"login"}
          onClick={() => router.push("/login")}
          key="log-in"
        >
          {headerPageText?.modal_login_button}
        </button>,
      ]}
    >
      <p className={"login-popup-text"}>
        {headerPageText?.modal_login_paragraph}
      </p>
    </Modal>
  );
};

export default HeaderLoginPopup;
