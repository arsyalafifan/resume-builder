import { Layout, Button, Image, Drawer } from 'antd';
import React from 'react';

import './navbar.css';
import Logo from './images/logo.png'
import NavbarList from "./NavbarList";

const { Header } = Layout

const Navbar = () => {
    return(
        <Header style={{backgroundColor: 'transparent', position: 'fixed', zIndex: '1', width: '100%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',}}>
            <div style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div className="nav-logo">
                    <Image width={60} src={Logo} preview={false}></Image>
                </div>
                <div className="nav-items">
                    <NavbarList mode='horizontal' />
                </div>
                <div>
                    <Button style={{ background: '#573cfa', color: '#FFF', height: '50px', width: '120px' }}>
                        Get Started
                    </Button>
                </div>
            </div>
    </Header>

    )
}
export default Navbar;

