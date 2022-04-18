import { Avatar,Layout,Card,Col, Typography,Row,notification} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';
import { faCashRegister,faBookOpenReader,faComment,faFilePen,faUpload } from "@fortawesome/free-solid-svg-icons";
import NavBar from '../components/NavBar'
import CanteenCard from '../components/canteenCard';

import React, { useState, useEffect } from 'react';
const { Content } = Layout;

const { Title } = Typography;

const CanteenHome=(props)=>{

    const [data, setData] = useState([])
    const getData = () => {
        fetch("/mess/livemenu/"+"mess1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        }).then((res)=> {
            if (!res.ok) {
                return {}
            }
            return res.json()
        }).then(
            (res) => {
                if (res.result==="success") {
                    console.log(res.menuItems.length)
                    setData(res.menuItems)
                } else {
                    notification.open({
                        message: 'Failed',
                        description:
                            'unable to fetch Data :(',
                    });
                }
            }
        )
    }

    useEffect(()=> {
        getData()
    }, [])

    let iheight='150px';
    let iwidth='150px';
    let width='100vw';
    let align='end'
    let isCenter=true
    if (isMobile) {
        iheight='15vh'
        iwidth='15vh'
        width='100vw'
        align='start'
        isCenter=false
    } else {
        iheight='10vw';
        iwidth='10vw';
        width='50vw'
    }

    return <>
         <div style={{padding:"5%" }}>
                
                
                {data.map((item, index) => {
                    const key = index + 1;
                    if(isCenter){
                        return (<center><CanteenCard title='something' width={width} iheight={iheight} iwidth={iwidth} key={key} img={item.image}/></center>);
                    }
                    return (<CanteenCard title='something' width={width} iheight={iheight} iwidth={iwidth} key={key} img={item.image}/>);
                    
                })}
                
            </div>
    </>   
}
export default CanteenHome;

