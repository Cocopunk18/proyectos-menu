import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "../../../assets/img/png/Logo.png";
import { RegistroForm } from "../RegistroForm";
import "./MenuTop.scss";

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  const [showRegistroModal, setShowRegistroModal] = useState(false); // Estado para mostrar/ocultar el modal de registro

  const handleRegistroClick = () => {
    setShowRegistroModal(true); // Mostrar el modal al hacer clic en "Registro"
  };

  const handleRegistroModalClose = () => {
    setShowRegistroModal(false); // Ocultar el modal al cerrarlo
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left__logo" src={Logo} alt="Logo" />
        <Button
          type="link"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          aria-label={menuCollapsed ? "Mostrar menú" : "Ocultar menú"}
        >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={handleRegistroClick}>
          Registro
        </Button>
      </div>
      {/* Mostrar el modal si showRegistroModal es true */}
      <Modal
        title="Formulario de Registro"
        visible={showRegistroModal}
        onCancel={handleRegistroModalClose}
        footer={null}
      >
        <RegistroForm />
      </Modal>
    </div>
  );
};
