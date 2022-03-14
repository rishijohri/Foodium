import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router'
import { Typography, Layout,notification, Button} from 'antd';
import {isMobile} from 'react-device-detect';
import NavBar from '../components/NavBar';
import PinInput from 'w-react-pin-input';
import 'antd/dist/antd.min.css';
// import '../assets/main.css'

import { QrReader } from 'react-qr-reader';
const { Header, Content } = Layout;
const { Title } = Typography;

const MessPayPage=()=>{
    var [pin, setPin] = useState(0)
    var [ind, setInd] = useState(0)
    
    const onFinish = ()=> {
        fetch("/payeat",{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                pin: pin
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
                    'scanning complete :)' + res.data,
            });
        } else {
        notification.open({
            message: 'Failed',
            description:
                'unable to scan. :(',
        });
    }
})
    }

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
                    <div style={{height:'50vh', 
                    width:'80vw', 
                    marginTop:'10vh',
                    marginBottom:'15vh', 
                    marginLeft: '8vw',
                    marginRight: '5vw',
                    verticalAlign:'center'}}>
                        <center>
                        <h2>Mess Payment</h2>
                        <PinInput 
                            length={4} 
                            initialValue=""
                            onChange={(value, index) => {
                                console.log(value)
                                console.log(index)
                                setPin(value)
                                setInd(0)
                            }} 
                            type="numeric" 
                            inputMode="number"
                            style={{padding: '10px'}}  
                            inputStyle={{borderColor: 'red'}}
                            inputFocusStyle={{borderColor: 'blue'}}
                            onComplete={(value, index) => {
                                setInd(1)
                            }}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                            <Button type="primary" onClick={onFinish} disabled={ind!=1}>Submit</Button>
                        </center>
                        </div>
                </Content>
        </Layout>
    );
}

export default MessPayPage;