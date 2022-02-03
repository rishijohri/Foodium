import React, { useState } from 'react';
import { Form, Typography, Input, Button, Radio, Slider, Layout, DatePicker } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const FeedbackPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    return (
        <Layout>
            <Header>
                <NavBar/>
            </Header>
            
            <Content style={{ padding: '0 15%' }}>
                <Title level={2}>Feedback</Title>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        vendorName: "Canteen",
                        rating: 0,
                        clean: 0,
                        speed: 0,
                        name: "",
                        comment: ""
                    }}
                    requiredMark='optional'
                    onFinish={onFinish}
                >
                    <Form.Item label="Choose Vendor" name="vendorName">
                        <Radio.Group>
                            <Radio.Button value="Mess">Mess</Radio.Button>
                            <Radio.Button value="Canteen">Canteen</Radio.Button>
                            <Radio.Button value="Other">Other Vendor</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Enter name" required="optional" tooltip="This is a required field" name="name">
                        <Input placeholder="Enter Name (Optional)" />
                    </Form.Item>
                    <Form.Item name="date" label="Date of Feedback" {...config}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="rating" label="Rating">
                        <Slider
                            marks={{
                                0: '0',
                                20: '20',
                                40: '40',
                                60: '60',
                                80: '80',
                                100: '100',
                            }}
                        />
                    </Form.Item>
                    <Form.Item name="clean" label="Cleanliness">
                        <Slider
                            marks={{
                                0: '0',
                                20: '20',
                                40: '40',
                                60: '60',
                                80: '80',
                                100: '100',
                            }}
                        />
                    </Form.Item>
                    <Form.Item name="speed" label="Speed of Service">
                        <Slider
                            marks={{
                                0: '0',
                                20: '20',
                                40: '40',
                                60: '60',
                                80: '80',
                                100: '100',
                            }}
                        />
                    </Form.Item>
                    <Form.Item name="comment" label="Comments"
                        tooltip={{
                            title: 'Tooltip with customize icon',
                            icon: <InfoCircleOutlined />,
                        }}
                    >
                        <TextArea placeholder="Enter Details here" rows={4}/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};
export default FeedbackPage;