import NavBar from '../components/NavBar'
import { Layout, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import back1 from '../images/a.jpg';
import Slider from '../components/Slider'
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
var isMoibile = false


const HomePage = () => {

    return (
        <Layout>
            <Header style={{ padding: '0', marginBottom: '5vh' }}>
                <NavBar />
            </Header>
            <Content>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={10}>
                            <Card  cover={<Slider image_array={[back1, back1]} width={'100%'} height={'50%'}/>} title="Mess 1" bordered={true}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={12}>  
                            <Card   cover={<Slider image_array={[back1, back1]}  />} title="Mess2" bordered={true}>
                                Card content
                            </Card>
                        </Col>
                        
                    </Row>
                </div>,

            </Content>
        </Layout>
    );
}


export default HomePage