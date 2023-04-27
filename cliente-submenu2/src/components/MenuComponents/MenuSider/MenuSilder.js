import React from 'react'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import "./MenuSilder.scss";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "clientes",
      icon: <HomeOutlined/>,
      label: "Clientes",
      subMenu: [
        {
          key: "clientes/lista",
          icon: <TeamOutlined/>,
          label: "Lista de clientes",
        },
        { 
          key: "clientes/nuevo", 
          icon: <TeamOutlined/>, 
          label: "Nuevo cliente" 
        },
      ],
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log(path);
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label, subMenu } = item;
    const isSelected = location.pathname === item.key;
    if (subMenu) {
      return (
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {subMenu.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
              {subMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        key={item.key}
        icon={React.cloneElement(icon, { className: "menu-item-icon" })}
        className={
          isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };
  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        mode="inline"
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={menuItems
          .filter((item) => item.subMenu)
          .map((item) => item.key)}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};