import NavBar from '../components/NavBar'
import { Layout, Card, Col, Row, Typography, Button } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import back1 from '../images/default.jpg'
import mess_1 from '../images/mess_1.jpg';
import mess_2 from '../images/mess_2.jpg';

import Slider from '../components/Slider'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const HomePage = () => {
    const [hg, vg, span] = isMobile ? [1, 10, 18] : [12, 6, 10];
    return (
        // 
            <div style={{height: '95vh', width:'98.75vw'}}>
            <Layout >
            <NavBar/>
            <Content >
                <div className="site -card-wrapper">
                    <Row gutter={[hg, vg]} justify={'center'}>
                        <Col span={span}>
                            <Link to="/mess-home"><Card title={<Title level={2} >Mess</Title>} bordered={false} ><Slider image_array={[images['mess_1.jpg'], images['mess_2.jpg']]} width={'100%'} height={'50%'}/></Card></Link>
                        </Col>
                        <Col span={span}>  
                        <Link to="#"><Card title={<Title level={2} >Canteen</Title>} bordered={true}><Slider image_array={[images['default.jpg'], images['juice-corner.jpg']]} width={'100%'} height={'50%'} /></Card></Link>
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