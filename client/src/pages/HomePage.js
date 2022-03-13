import NavBar from '../components/NavBar'
import { Layout, Card, Col, Row, Typography, Button } from 'antd';
import React, { useState } from 'react';
import back1 from '../images/a.jpg';
import Slider from '../components/Slider'
import {isMobile} from 'react-device-detect';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;


const HomePage = () => {
    var hg= 2;
    var vg=2;
    var span=12;
    if (isMobile) {
            hg= 1
            vg= 1
            span= 16
    } else {
            hg=6;
            vg= 6
            span= 10
    }
    return (
        
        // 
            <div style={{height: '95vh', width:'98.75vw'}}>
            <Layout >
            <NavBar/>
            <Content >
                <div className="site-card-wrapper">
                    <Row gutter={[hg, vg]} justify={'center'}>
                        <Col span={span}>
                            <Card  cover={<Slider image_array={[back1, back1]} width={'100%'} height={'50%'}/>} title="Mess" bordered={true} />
                        </Col>
                        <Col span={span}>  
                            <Card   cover={<Slider image_array={[back1, back1]} width={'100%'} height={'50%'} />} title="Canteen" bordered={true}/>
                        </Col>         
                    </Row>
                </div>
            </Content>
            </Layout>
            </div>
            
            
        //  
    );
}


export default HomePage