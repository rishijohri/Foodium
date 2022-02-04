import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox ,Layout, Typography} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import foodiumLogo from '../images/foodiumLogo.png';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import '../assets/signIn.css';
import NavBar from '../components/NavBar'
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const SignInPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Layout>
            <Header style={{padding:'0'}}><NavBar/></Header>
            <Content style={{ padding: '0 15%', margin:' 2%'}}>
                    <Title level={2}>Sign In</Title>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
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