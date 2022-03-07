import React, { useState } from 'react';
import { Form, Typography, Input, Button, Radio, Slider, Layout, DatePicker } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
import '../assets/main.css'
const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const FeedbackPage = () => {
    const [form] = Form.useForm();
    const [hiddenField, setHiddenField] = useState('text')
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onValuesChange = (_, allv) => {
        if (allv.vendorName == 'Mess')
        {
            setHiddenField('')
        } else {
            setHiddenField('none')
        }
    }
    
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
        <Layout className='layout'>
            <Header style={{padding:'0'}}>
                <NavBar/>
            </Header>
            <Content style={{ padding: '0 15%', margin:' 2%'}}>
                <Title level={2}>Feedback</Title>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        vendorName: "Mess",
                        rating: 0,
                        clean: 0,
                        speed: 0,
                        name: "",
                        comment: ""
                    }}
                    requiredMark='optional'
                    onFinish={onFinish}
                    onValuesChange={onValuesChange}
                >
                    <Form.Item label="Choose Vendor" name="vendorName">
                        <Radio.Group>
                            <Radio.Button value="Mess">Mess</Radio.Button>
                            <Radio.Button value="Canteen">Canteen</Radio.Button>
                            <Radio.Button value="Other">Other Vendor</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Choose Slot" name="slotName" style={{display:hiddenField}}>
                        <Radio.Group>
                            <Radio.Button value="Breakfast">Breakfast</Radio.Button>
                            <Radio.Button value="Lunch">Lunch</Radio.Button>
                            <Radio.Button value="Dinner">Dinner</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Enter name" required="optional" tooltip="This is an optional field" name="name">
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
                    <Form.Item name="speed" label="Speed of Service" style={{display:'none'}}>
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
                    <Form.Item name="taste" label="Taste of Food">
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
                    <Form.Item name="overall-food" label="Overall Food Quality">
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
                    <Form.Item name="overall-service" label="Overall Service">
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
                            title: 'Any additional comments',
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