import React, { useState } from 'react';
import {useNavigate} from 'react-router'
import { Typography, Input, Layout, Avatar ,notification} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {isMobile} from 'react-device-detect';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
// import '../assets/main.css'

import { QrReader } from 'react-qr-reader';
const { Header, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const QRScanPage=()=>{
    const [data, setData] = useState('No result');
    const [keepScan,setKeepScan]=useState(true);
    var onResult= async (values,error)=>{
        setData(values?.text)
        console.log(values)
        if (values?.text && keepScan) { 
               //check validity of value.txt in future
            setKeepScan(false)
            notification.open({
                message: 'Success',
                description:
                    'Go!!!!! And eat the Shit',
            });
           
        }
    }
    var camSetting;
    if (isMobile) {
        camSetting = {exact: 'environment'}
    } else {
        camSetting = {exact: 'user'}
    }
    return (
        <Layout style={{height:'100vh', width:'100vw'}}>
                <Content >
                    <div style={{height:'50vh', 
                                width:'80vw', 
                                marginTop:'15vh',
                                marginBottom:'15vh', 
                                marginLeft: '6vw',
                                marginRight: '6vw'}}>
                        <QrReader
                        constraints={{autoGainControl: true, facingMode:camSetting}}
                            onResult={onResult}
                            // onResult={(result, error) => {
                            // if (!!result) {
                            //     setData(result?.text);
                            // }

                            // if (!!error) {
                            //     console.info(error);
                            // }
                            // }}
                        />
                        <center>
                            <p>{data}</p>
                        </center>
                    </div>
                </Content>
        </Layout>
    );
}

export default QRScanPage;