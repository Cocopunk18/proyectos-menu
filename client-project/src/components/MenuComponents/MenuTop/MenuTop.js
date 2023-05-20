import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "../../../assets/img/png/Logo.png";
import { Logout } from "../Logout";
import { RegistroForm } from "../RegistroForm";
import { SignIn } from "../../../pages/Admin/SignIn";
import "./MenuTop.scss";

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  const [showRegistroModal, setShowRegistroModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleRegistroClick = () => {
    setShowRegistroModal(true);
  };

  const handleRegistroModalClose = () => {
    setShowRegistroModal(false);
  };

  const handleLogin = () => {
    setShowSignInModal(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleSignInModalClose = () => {
    setShowSignInModal(false);
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
        {loggedIn ? (
          <>
            <Button type="link" onClick={handleLogout}>
              Cerrar sesión
            </Button>
            <Logout />
          </>
        ) : (
          <Button type="link" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        )}
      </div>

      <Modal
        title="Formulario de Registro"
        visible={showRegistroModal}
        onCancel={handleRegistroModalClose}
        footer={null}
      >
        <RegistroForm />
      </Modal>
      <Modal
        title="Inicio de sesión"
        visible={showSignInModal}
        onCancel={handleSignInModalClose}
        footer={null}
      >
        <SignIn />
      </Modal>
    </div>
  );
};
