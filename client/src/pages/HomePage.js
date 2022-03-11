import NavBar from '../components/NavBar'
import { Layout, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import back1 from '../images/a.jpg';
import Slider from '../components/Slider'
import {isMobile} from 'react-device-detect';
const { Header, Footer, Sider, Content } = Layout;



const HomePage = () => {
    var hg= 6;
    var vg=6;
    var span=16;
    if (isMobile) {
            hg= 6
            vg= 6
            span= 16
    } else {
            hg=6;
            vg= 6
            span= 10
    }
    return (
        <Layout style={{height: '90vh'}}>
            {/* <Header collapsible={true} style={{ padding: '0',height:'1', zIndex: '1'}}> */}
            {/* </Header> */}
            <Content >
                <div className="site-card-wrapper">
                    <Row gutter={[hg, vg]} justify={'center'}>
                        <Col span={span}>
                            <Card  cover={<Slider image_array={[back1, back1]} width={'100%'} height={'50%'}/>} wrap={true} title="Mess 1" bordered={true} />
                        </Col>
                        <Col span={span}>  
                            <Card   cover={<Slider image_array={[back1, back1]} width={'100%'} height={'50%'} />} title="Mess2" bordered={true}/>
                        </Col>
                    </Row>
                </div>
            </Content>
            
        </Layout>
    );
}


export default HomePage