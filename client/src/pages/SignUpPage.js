import React from 'react';
import { Link } from "react-router-dom";
import foodiumLogo from '../images/foodiumLogo.png';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
// import '../assets/signUpPage.css';
import '../assets/signIn.css';
import {
    Form,
    Input,
    Cascader,
    Select,
    Checkbox,
    Button,
    Typography,
    Layout
} from 'antd';
import NavBar from '../components/NavBar'
const { Title } = Typography;
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;
const position = [
    {
        value: 'Student',
        label: 'Student',
    },
    {
        value: 'Faculty',
        label: 'Faculty',
    },
    {
        value: 'Mess Vendor',
        label: 'Mess Vendor',
    },
    {
        value: 'Canteen Owner',
        label: 'Canteen Owner',
    },
    {
        value: 'Mess Inspection Team Member',
        label: 'Mess Inspection Team Member',
    },
    {
        value: 'Canteen Inspection Team Member',
        label: 'Canteen Inspection Team Member',
    },
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'BOHA',
        label: 'BOHA',
    },
    {
        value: 'President SC',
        label: 'President SC',
    },
    {
        value: 'Guest',
        label: 'Guest',
    },
];
// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };
// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0,
//         },
//         sm: {
//             span: 16,
//             offset: 8,
//         },
//     },
// };

const SignUpPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Layout>
            <Header style={{padding:'0'}}>
                <NavBar/>
            </Header>
            <Content style={{ padding: '0 15%', margin:' 2%', height:"83vh"}}>
            <Title level={2}>Sign Up</Title>
            <Form
                // {...formItemLayout}
                className="registerationForm"
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '91',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            unique: true,
                            message: 'Please input your username!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="Position"
                    label="Who are you?"
                    rules={[
                        {
                            type: 'array',
                            required: true,
                            message: 'Who are you?',
                        },
                    ]}
                >
                    <Cascader options={position} />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    // {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item 
                // {...tailFormItemLayout}
                >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <center>
                        Or <Link to="/sign-in">Sign in</Link> if you already have an account
                    </center>
                </Form.Item>
            </Form>
            </Content>
        </Layout>
    );
};


export default SignUpPage