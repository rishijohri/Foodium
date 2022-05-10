import NavBar from '../components/NavBar'
import { Layout, Card, Col, Row, Typography, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import Slider from '../components/Slider'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';
import MenuCard from '../components/menuCard';
const {Content } = Layout;
const { Title } = Typography;

function importAll(r) {
    let img = {};
    r.keys().map((item, _index) => { img[item.replace('./', '')] = r(item); });
    return img;
  }
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const CanteenHomePage = (props) => {
    const [data, setData] = useState([])
    const getData = async ()=> {
        let req = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        }
        let res = await fetch('/canteen/vendors', req)
        if (!res.ok) {
            return
        }
        res = await res.json()
        if (res.result==='success') {
            setData(res.data)
        }
    }
    useEffect(() => {
        getData()
    }, []);
    const [hg, vg, span] = isMobile ? [1, 10, 18] : [12, 6, 10];
    let [iheight, iwidth, width, isCenter] = isMobile ? ['15vh', '15vh', '100vw', 'space-around'] : ['10vw', '10vw', '50vw', 'center']
    return (
            <Layout style={{ overflow:'hidden', hidden:'100vh', width:'100vw'}} >
            <NavBar username={props.username}/>
            <Content >
                <div className="site -card-wrapper">
                    <Row gutter={[hg, vg]} justify={isCenter}>
                        {data.map((item, ind)=> {
                            return (<Col span={span}>
                                <Link to={"/canteen/"+item.name}>
                                    <MenuCard
                                    title={item.name} 
                                    width={width} 
                                    iheight={iheight} 
                                    iwidth={iwidth} 
                                    key={ind} 
                                    rateh={item.rating} 
                                    div={item.desc} 
                                    img={item.image}
                                    />
                                </Link>
                            </Col>)
                        })}    
                    </Row>
                </div>
            </Content>
            </Layout>
    );
}

CanteenHomePage.defaultProps = {
    position: 'student'
}

export default CanteenHomePage