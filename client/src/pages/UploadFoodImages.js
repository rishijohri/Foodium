import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Layout, Typography, notification, Image, Rate, Card} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import FileBase64 from 'react-file-base64';
import NavBar from '../components/NavBar'
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import Authenticate from "../components/authenticate";
const {Content } = Layout;
const { Title, Text } = Typography;

const UploadImage = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState({ image: '' });
    const [health, setHealth] = useState(0);
    const [quality, setQuality] = useState(0);
    const onFinish = (values) => {
        fetch("/uploadimage", {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name: values.food_name,
                health: health,
                quality: quality,
                vendor: values.vendor,
                desc: values.desc,
                image: item.image
            })
       }).then(
           (res) => {
            if (!res.ok) {
                return {}
           }
           return res.json()
        }
       ).then((res)=> {
        if (res.result==='success') {
            notification.open({
                message: 'success',
                description:
                    'success :)',
            });
        } else {
        notification.open({
            message: 'Failed',
            description:
                'unable to upload :(',
        });
        }
    })
    }
    const handleHealth = (val) => {
        setHealth(val)
    }
    const handleQuality = (val) => {
        setQuality(val)
    }
    return (
        <Authenticate  position={["Student"]}>
        <Layout>
            <NavBar />
            <Content style={{padding:'10px'}}>
                <Title level={2}>Upload Image</Title>
                <Form
                    action="" onFinish={onFinish}
                >
                    <Form.Item
                        name="food_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of food item!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="item name" />
                    </Form.Item>
                    <Form.Item
                        name="vendor"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of food item!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name of vendor" />
                    </Form.Item>
                    <Form.Item
                        name="desc"
                        rules={[
                            {
                                required: true,
                                message: 'Enter food description',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Normal" />
                    </Form.Item>
                    <Form.Item
                        name="quality"
                        rules={[
                            {
                                message: 'Please input your Quality!',
                            },
                        ]}
                    >
                    <Card>
                        <Text>Quality </Text><Rate  onChange={handleQuality} value={quality} />
                    </Card>
                        
                    </Form.Item>
                    <Form.Item
                        name="health"
                        rules={[
                            {
                                message: 'Please input your Health!',
                            },
                        ]}
                    >
                        <Card>
                        <Text>Health </Text><Rate  onChange={handleHealth} value={health} />
                        </Card>
                    </Form.Item>

                    <Form.Item
                    name='file'
                    rules={[
                        {
                            message:'Please Upload'
                        }
                    ]}
                    >
                    <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                    />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType="submit" className="login-form-button">
                            Upload
                        </Button>
                    </Form.Item>
                </Form>
                <Image src={item.image}/>
            </Content>
        </Layout>
        </Authenticate>
    );
};

export default UploadImage