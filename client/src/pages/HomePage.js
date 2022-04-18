import NavBar from '../components/NavBar'
import { Layout, Card, Col, Row, Typography, Button } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import Slider from '../components/Slider'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';

const {Content } = Layout;
const { Title } = Typography;

function importAll(r) {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '')] = r(item); });
    return img;
  }
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const HomePage = (props) => {
    const [hg, vg, span] = isMobile ? [1, 10, 18] : [12, 6, 10];
    let visible1 = 'none';
    let visible2 = '';
    if (props.position==='Mess Vendor') {
        visible1 = '';
        visible2 = 'none';
    }
    return (
            <Layout style={{ overflow:'hidden', hidden:'100vh', width:'100vw'}} >
            <NavBar/>
            <Content >
                <div className="site -card-wrapper">
                    <Row gutter={[hg, vg]} justify={'center'}>
                        <Col span={span} style={{display:visible2}}>
                            <Link to="/mess/home">
                                <Card title={<Title level={2} >Mess</Title>} bordered={false} >
                                    <Slider image_array={[images['mess_1.jpg'], images['mess_2.jpg']]} width={'100%'} height={'50%'}/>
                                </Card>
                            </Link>
                        </Col>
                        <Col span={span} style={{display:visible2}}>  
                        <Link to="/canteen/home">
                            <Card title={<Title level={2} >Canteen</Title>} bordered={true}>
                                <Slider image_array={[images['default.jpg'], images['juice-corner.jpg']]} width={'100%'} height={'50%'} />
                            </Card>
                        </Link>
                        </Col>
                        <Col span={span} style={{display:visible1}}>  
                        <Link to="/mess-vendor/home">
                            <Card title={<Title level={2} >Mess Vendor</Title>} bordered={true}>
                                <Slider image_array={[images['default.jpg'], images['juice-corner.jpg']]} width={'100%'} height={'50%'} />
                            </Card>
                        </Link>
                        </Col>           
                    </Row>
                </div>
            </Content>
            </Layout>
    );
}

HomePage.defaultProps = {
    position: 'student'
}

export default HomePage