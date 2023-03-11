import { Header } from "antd/es/layout/layout";
import React from 'react';
import { Button, Image, Drawer } from "antd";

import Logo from './images/logo.png'

const Navbar = () => {
    return(
        <Header style={{position: 'fixed', zIndex: '1', width: '100%', height: '100px'}}>
            <div style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div className="nav-logo">
                    <Image width={80} src={Logo} preview={false}></Image>
                </div>
            </div>
        </Header>
    )
}
export default Navbar;

