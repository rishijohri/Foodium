import React, { useState } from 'react';
import {useNavigate} from 'react-router'
import { Form, Typography, Input, Button, Radio, Slider, Layout, DatePicker, notification } from 'antd';

import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
import '../assets/main.css'

import { QrReader } from 'react-qr-reader';
const { Header, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const QRScanPage=()=>{
    const [data, setData] = useState('No result');
    return (
        <Layout style={{height:'100vh', width:'100vw'}}>
            <Header style={{height:'10vh'}}>
                <NavBar/>
            </Header>
            <center>
            <Content >
                <div style={{height:'10vh', width:'10vw'}}>
                <QrReader
                constraints={{autoGainControl: true}}
                    onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                    }}
                />
            <p>{data}</p>
            </div>
            </Content>
            </center>
        </Layout>
    );
}

export default QRScanPage;