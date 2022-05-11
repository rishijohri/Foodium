import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Layout, Typography, notification, Image, Rate, Card, Cascader} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import FileBase64 from 'react-file-base64';
import NavBar from '../components/NavBar'
import 'antd/dist/antd.min.css';
import '../assets/main.css';
const {Content } = Layout;
const { Title, Text } = Typography;

const CanteenInspectionPage = (props) => {
    const [item, setItem] = useState({ image: '' });
    const [health, setHealth] = useState(0);
    const [quality, setQuality] = useState(0);
    const [data, setData] = useState([{
        value: 'Label',
        label: 'Label',
    }]);
    const [items, setItems] = useState([{
        value: 'Unknown',
        label: 'Unknown'
    }])
    const onFinish = (values) => {
        console.log(values)
        fetch("/canteen/updateitem", {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            },
            body:JSON.stringify({
                name: values.food_name,
                rating: quality,
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
        } else {
        notification.open({
            message: 'Failed',
            description:
                'unable to upload :(',
        });
        }
    })
    }
    const getData = () => {
        console.log("entered getDATA")
        fetch("/canteen/getvendors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        }).then((res) => {
            if (!res.ok) {
                return {}
            }
            return res.json()
        }).then(
            (res) => {
                if (res.result==="success") {
                    // console.log(res.vendors)
                    setData(res.vendors)
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
    const getItems = async (vendor) => {
        let res = await fetch('/mess/getmenu/'+vendor+'/'+day+'/'+h, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        })
        if (!res.ok) {
            return
        }
        res = await res.json()
        if (res.result==='success') {
            console.log(res.menuItems)
            setItems(res.menuItems)
        }
    }
    const onValueChange = (c, _a) => {
        console.log(c)
        if (Object.hasOwn(c, 'vendor')) {
            getItems(c.vendor)
        }
    }
    useEffect(()=> {
        getData()
    }, [])

    return (
        <Layout>
            <NavBar username={props.username}/>
            <Content style={{padding:'0vh 5vh'}}>
                <Title level={2}>Inspection Report</Title>
                <Form
                    onFinish={onFinish}
                    onValuesChange={onValueChange}
                >
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
                        name="food_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of food item!',
                            },
                        ]}
                    >
                        <Cascader options={items} placeholder='food name' />
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Description" />
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

export default CanteenInspectionPage