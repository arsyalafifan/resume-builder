import React, { useState } from 'react';
import { Col, Row, Form, Input } from 'antd';

const CreateResume = ({
    handleChangeFormData,
    validNameMessage,
    data
}) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'
        ? {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 14,
            },
            }
        : null;

        const buttonItemLayout =
        formLayout === 'vertical'
            ? {
                wrapperCol: {
                span: 14,
                offset: 4,
                },
            }
            : null;
    return (
        <>
            <div style={{paddingLeft: 35, paddingRight: 35}}>
                <h1>Create Resume Page</h1>
                <Row style={{height: '100%'}}>
                    <Col style={{padding: 10}} xl={10} lg={10} md={10} sm={24} xs={24}>
                        <h2>Your Profiles</h2>
                        <p style={{ color: '#7A7A7A' }}>Be concise - The harsh reality is that hiring managers only spend an average of 6 seconds on each resume.</p>
                        <Form   {...formItemLayout}
                                layout={formLayout}
                                form={form}
                                initialValues={{
                                layout: formLayout,
                            }}
                            
                            >
                            <Form.Item
                                label="Name"
                                name="name"
                                value={data.name}
                                onChange={handleChangeFormData}
                                validateStatus={validNameMessage}
                                help='please input valid name'
                                >
                                <Input value={data.name} />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col style={{
                        background: '#F0F0F0'
                    }} xl={14} lg={14} md={14} sm={24} xs={24}>col-12</Col>
                </Row>
            </div>
        </>
    )
}

export default CreateResume;