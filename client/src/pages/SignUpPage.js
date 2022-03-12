import React from 'react';
import { useNavigate} from 'react-router';
import 'antd/dist/antd.min.css';
// import '../assets/main.css';
import {
    Form,
    Input,
    Cascader,
    Select,
    Checkbox,
    Button,
    Typography,
    Layout,
    notification,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Option } = Select;
const { Content } = Layout;
const positions = [
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

const SignUpPage = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    var phoneno = /^\d{10}$/;

    const onFinish = async (values) => {
        const { username, prefix, phone, password, email, confirm, agreement } = values;
        const position = values.position[0];
        const res = await fetch("/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, prefix, phone, password, email, confirm, agreement, position,
            })
        })
        if (!res.ok) {
            notification.open({
                message: 'Failed',
                description:
                    'unable to submit. Please try again later. :(',
            });
            return;
        }
        const data = await res.json();
        if (data.result === 'success') {
            return navigate('/home', {replace:true});
        }
        else {
            notification.open({
                message: 'Login failed!',
                description:
                    'unable to log in. Please try again later. :(',
            });
        }

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
                <Content style={{padding:'10px'}}>
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
                            rules={[
                                {
                                    required: true,
                                    unique: true,
                                    message: 'Please input your username!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="email"
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
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
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
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="position"
                            rules={[
                                {
                                    type: 'array',
                                    required: true,
                                    message: 'Who are you?',
                                },
                            ]}
                        >
                            <Cascader options={positions} prefixSelector={<TeamOutlined />} placeholder='Position' />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                    validator: (_, value) =>
                                        value.match(phoneno) ? Promise.resolve() : Promise.reject(new Error('Invalid phone number')),
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            // prefix={<PhoneOutlined/>}
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
                                I have read the <a href="/">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
                {/* </div > */}
        </Layout>

    );
};


export default SignUpPage