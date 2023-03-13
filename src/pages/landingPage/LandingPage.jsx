import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';

const { Header, Content, Footer } = Layout;


const LandingPage = () => {
    return(
        <>
        <Layout>
            <Navbar />
            <Hero />
        </Layout>
        </>
    )
}

export default LandingPage;