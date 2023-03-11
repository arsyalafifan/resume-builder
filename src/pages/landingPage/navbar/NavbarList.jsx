import React from 'react';
import { Menu } from "antd";
import SubMenu from 'antd/es/menu/SubMenu';

const NavbarList = ({
    mode
}) => {
    return (
        <Menu mode={mode} style={{ backgroundColor: 'transparent', color: '#1c1a27' }}>
            <Menu.Item key='home'>
                <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key='services'>
                <a href="/">Services</a>
            </Menu.Item>
        </Menu>
    )
}

export default NavbarList;
