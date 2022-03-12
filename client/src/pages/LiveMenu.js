import NavBar from '../components/NavBar'
import FlipCard from '../components/FlipCard'
import back1 from '../images/a.jpg';
import Slider from '../components/Slider'
import { Layout, Card, Col, Row, Typography, Button } from 'antd';
import React, { useState } from 'react';
// import back1 from '../images/a.jpg';
import {isMobile} from 'react-device-detect';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;


const LiveMenu = () => {
    var hg= 6;
    var vg=6;
    var span=16;
    if (isMobile) {
            hg= 6
            vg= 6
            span= 16
    } else {
            hg=6
            vg= 6
            span= 10
    }
    return (
        <Layout style={{height: '95vh', width:'93.4vw'}}>
            <NavBar/>
            <Content >
                <div className="site-card-wrapper">
                    <Row gutter={[hg, vg]} justify={'center'}>
                        <Col span={span}>
                            <FlipCard foodImage={back1} quality={2} health={3}/>
                        </Col>
                        <Col span={span}>  
                            <FlipCard foodImage={back1} quality={2} health={3}/>
                        </Col>
                        <Col span={span}>  
                            <FlipCard foodImage={back1} quality={2} health={3}/>
                        </Col>
                        <Col span={span}>  
                            <FlipCard foodImage={back1} quality={2} health={3}/>
                        </Col>         
                    </Row>
                </div>
            </Content>
            
        </Layout>
    );
}


export default LiveMenu