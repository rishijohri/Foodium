import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router'
import { Typography, Layout,notification} from 'antd';
import {isMobile} from 'react-device-detect';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
// import '../assets/main.css'

import { QrReader } from 'react-qr-reader';
const { Header, Content } = Layout;
const { Title } = Typography;

const QRScanPage=()=>{
    var [data, setData] = useState('');
    var [keepScan,setKeepScan]=useState(true);
    var onResult = (values, err)=> {
        
        if (values?.text && keepScan)
        {
            setData(values?.text)
            setKeepScan(false)
        }
    }
    useEffect(() => {
        console.log('entered')
        if (!keepScan && data.length>2) {
        console.log(data)
        fetch("/payeat",{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                messUsername :data
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
                    'sccning complete :(',
            });
        } else {
        notification.open({
            message: 'Failed',
            description:
                'unable to scan. :(',
        });
    }
    });
    }
    }, [keepScan, data])

    var camSetting;
    if (isMobile) {
        camSetting = {exact: 'environment'}
    } else {
        camSetting = {exact: 'user'}
    }
    return (
        <Layout style={{height:'100vh', width:'100vw'}}>
            <NavBar/>
                <Content>
                <center><h2>QR Scanner</h2></center>
                    <div style={{height:'50vh', 
                    width:'80vw', 
                    marginTop:'10vh',
                    marginBottom:'15vh', 
                    marginLeft: '8vw',
                    marginRight: '5vw',
                    verticalAlign:'center'}}>
                        <QrReader
                        scanDelay={1500}
                        constraints={{autoGainControl: true, facingMode:camSetting}}
                            onResult={onResult}
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