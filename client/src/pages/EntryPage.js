import { Outlet } from 'react-router';
import { Layout } from 'antd';
import NavBar from '../components/NavBar'
import { Carousel } from 'antd';
import { Image } from 'antd';
import back1 from '../images/a.jpg';
import Slider from '../components/Slider'
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import SignInPage from'./SignInPage';
import SignUpPage from './SignUpPage';
import { CloseOutlined  } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const contentStyle = {
    height: '10vh',
    color: '#fff',
    lineHeight: '0',
    textAlign: 'center',
    background: '#364d79',
    margin: '0',
    // display: 'block',
    // objectFit:"cover"
};
const EntryPage = () => {
    const [visibleSignIn, setVisibleSignIn] = useState(false);
    const [visibleSignUp, setVisibleSignUp] = useState(false);
    const [type, setType] = useState();

    const showSignIn = () => {
        setType('SignIn');
        setVisibleSignIn(true);
        setVisibleSignUp(false)
    };

    const showSignUp = () => {
        setType('Sign Up');
        setVisibleSignUp(true);
        setVisibleSignIn(false)
        
    };

    const onClose = () => {
        setVisibleSignIn(false);
        setVisibleSignUp(false);
    };

    return (
        <Layout style={{ padding: '0', margin: '0', height: '100vh' }} >
            {/* <Header style={{ padding: '0' }}>
                <NavBar />
            </Header> */}

            <Content >
                <div >
                    <Slider image_array={[back1, back1]} width={'100vw'} height={'90vh'} />
                </div>
            </Content>            

            <Footer>
                <center>
                <Space>
                    Have an account
                    <Button type="primary" onClick={showSignIn}>
                        SignIn
                    </Button>
                    or
                    <Button type="primary" onClick={showSignUp}>
                        Sign Up
                    </Button>
                    </Space>
                </center>
                <Drawer
                    title={<Button shape='circle' icon={<CloseOutlined /> } onClick={onClose}/>}
                    placement="right"
                    type={type}
                    onClose={onClose}
                    visible={visibleSignIn}
                    closable={false}
                    headerStyle={{ position: 'center',textAlign:'center' }}
                    // extra={
                    //     <Space>
                    //         <Button onClick={onClose}>Cancel</Button>
                    //         <Button type="primary" onClick={onClose}>
                    //             OK
                    //         </Button>
                    //     </Space>
                    // }
                >
                    
                    <SignInPage/>
                </Drawer>
                <Drawer
                    title={<Button shape='circle' icon={<CloseOutlined /> } onClick={onClose}/>}
                    placement="right"
                    type={type}
                    onClose={onClose}
                    visible={visibleSignUp}
                    closable={false}
                    headerStyle={{ position: 'center',textAlign:'center' }}
                    // size={'large'}
                    // extra={
                    //     <Space>
                    //         <Button onClick={onClose}>Cancel</Button>
                    //         <Button type="primary" onClick={onClose}>
                    //             OK
                    //         </Button>
                    //     </Space>
                    // }
                    // style={{width:'10vw'}}
                >
                    
                    <SignUpPage/>
                </Drawer>
            </Footer>
        </Layout>

    );
}
export default EntryPage