import React from 'react';
import { Layout, Row, Col, Image, Button } from 'antd';

import cvVector from './images/cvVector.jpg'

const { Content } = Layout;

const Hero = () => {
    return(
        <Content style={{ background: '#fff' }}>
            <Row style={{ margin: 35 }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} 
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                     }}>
                    <h1 style={{ fontSize: 48, textAlign: 'left', marginBottom: 10 }}>
                        Best your changes of landing that dream job
                    </h1>
                    <p style={{ fontSize: 18, textAlign: 'left' }}>
                        Create your own resume, many templates and easy as you click submit button
                    </p>
                    <Button style={{ background: '#573cfa', color: '#FFF', height: '50px', width: '120px' }}>
                        Get Started
                    </Button>
                </Col>
                <Col span={12}>
                    <Image src={cvVector} preview={false} />
                </Col>
            </Row>
        </Content>
    )
}

export default Hero;