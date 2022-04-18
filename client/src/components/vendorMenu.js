import { Layout, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import VMenuCard from '../components/vmenuCard';
import {isMobile} from 'react-device-detect';
import 'antd/dist/antd.min.css';
import '../assets/main.css';

const { Content } = Layout;

const VendorMenu = (props) => {
    const [data, setData] = useState([])
    const getData = () => {
        fetch("/mess/livemenu/"+props.vendor, {
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
    let isCenter=true
    if (isMobile) {
        iheight='15vh'
        iwidth='15vh'
        width='100vw'
        isCenter=false
    } else {
        iheight='10vw';
        iwidth='10vw';
        width='50vw'
    }
    return(
            <div style={{padding:"5%" }}>
                {data.map((item, index) => {
                    const key = index + 1;
                    if(isCenter){
                        return (<center>
                            <VMenuCard 
                            title={item.name} 
                            width={width} 
                            iheight={iheight} 
                            iwidth={iwidth} 
                            content={item.desc} 
                            key={key} 
                            rateh={item.health} 
                            rateq={item.quality} 
                            div={item.desc} 
                            img={item.image}/></center>);
                    }
                    return (<VMenuCard title={item.name} width={width} iheight={iheight} iwidth={iwidth} content={item.desc} key={key} rateh={item.health} rateq={item.quality} div={item.desc} img={item.image}/>);
                })}
                
            </div>
    );
}

VendorMenu.defaultProps = {
    vendor: "Kitchen",
    time: 'breakfast',
    day: 'mo'
}

export default VendorMenu