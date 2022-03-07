import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Layout, Typography, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import foodiumLogo from '../images/foodiumLogo.png';
// import 'antd/dist/antd.min.css';
import '../assets/main.css';
import '../assets/signIn.css';
import NavBar from '../components/NavBar'
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const SignInPage = () => {
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        const { username, password } = values;

        const res = await fetch("/signin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
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

        if (data.result == 'success') {
            notification.open({
                message: 'logged in',
                description:
                    'yoohoo!!',
            });
        }
        else {
            notification.open({
                message: 'Login failed!',
                description:
                    'unable to log in. Please try again later. :(',
            });
        }

    };

    return (
        <Layout>
            <Header style={{ padding: '0' }}><NavBar /></Header>
            <Content style={{ padding: '0 15%', margin: ' 2%', height: "81vh" }}>
                <Title level={2}>Sign In</Title>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                // method="POST"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item className="login-form-second-last-item">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <center>
                            Or <Link to="/sign-up">register now!</Link>
                        </center>
                    </Form.Item>
                </Form>
            </Content>

        </Layout>

    );
};

// ReactDOM.render(<NormalLoginForm />, mountNode);
export default SignInPage




// const SignInPage = () => {

//     return (
//         <></>
//     );
// }


// export default SignInPage