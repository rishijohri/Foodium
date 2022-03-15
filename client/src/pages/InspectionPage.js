import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Layout, Typography, notification, Image, Rate, Card, Cascader} from 'antd';
import { UserOutlined, TeamOutlined} from '@ant-design/icons';
import FileBase64 from 'react-file-base64';
import NavBar from '../components/NavBar'
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import Authenticate from "../components/authenticate";
const {Content } = Layout;
const { Title, Text } = Typography;

const InspectionPage = () => {
    const [item, setItem] = useState({ image: '' });
    const [health, setHealth] = useState(0);
    const [quality, setQuality] = useState(0);
    const [data, setData] = useState([{
        value: 'Label',
        label: 'Label',
    }]);

    const onFinish = (values) => {
        console.log(values)
        fetch("/uploadimage", {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name: values.food_name,
                health: health,
                quality: quality,
                vendor: values.vendor[0],
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
            window.location.reload();
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
    const getData = () => {
        console.log("entered getDATA")
        fetch("/messvendors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (!res.ok) {
                return {}
            }
            return res.json()
        }).then(
            (res) => {
                if (res.result==="success") {
                    // console.log(res.menuItems)
                    setData(res.menuItems)
                } else {
                    notification.open({
                        message: 'Failed',
                        description:
                            'unable to fetch Data :(',
                    });
                }
            }
        )
    }

    useEffect(()=> {
        getData()
    }, [])

    return (
        <Layout>
            <NavBar />
            <Content style={{padding:'0vh 5vh'}}>
                <Title level={2}>Inspection Report</Title>
                <Form
                    onFinish={onFinish}
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
                                    type: 'array',
                                    required: true,
                                    message: 'Mess Name',
                                },
                            ]}
                        >
                            <Cascader options={data} placeholder='vendor name' />
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
    );
};

export default InspectionPage