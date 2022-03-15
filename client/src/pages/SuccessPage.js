import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router'
import { Typography, Layout, Image} from 'antd';
import NavBar from '../components/NavBar';
import tick from '../images/tick.jpeg';
import {isMobile} from 'react-device-detect';
const { Header, Content } = Layout;
const { Title } = Typography;

const SuccessPage = (props) => {

    var dim = "65vh"
    if (isMobile) {
        dim = "75vw"
    } 
    console.log(props.date)
    return(
        <Layout>
            <NavBar/>
            <Content>
                <center>
                <Title>Success</Title>
                <Image src={tick} width={dim} height={dim}/>
                </center>
            </Content>
        </Layout>
    )
}

export default SuccessPage