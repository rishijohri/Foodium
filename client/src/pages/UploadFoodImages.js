import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Layout, Typography, notification, Image} from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import FileBase64 from 'react-file-base64';
import NavBar from '../components/NavBar'
import 'antd/dist/antd.min.css';
import '../assets/main.css';
const {Content } = Layout;
const { Title } = Typography;

const UploadImage = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState({ image: '' });
    

    const onFinish = (values) => {
        fetch("/uploadimage", {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name: values.food_name,
                health: values.health,
                quality: values.quality,
                vendor: values.vendor,
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

      
    return (
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
                        name="quality"
                        rules={[
                            {
                                message: 'Please input your Quality!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="quality"
                        />
                    </Form.Item>
                    <Form.Item
                        name="health"
                        rules={[
                            {
                                message: 'Please input your Health!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="health"
                        />
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
    );
};

export default UploadImage