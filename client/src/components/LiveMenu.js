import { Layout, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import MenuCard from '../components/menuCard';
import {isMobile} from 'react-device-detect';
import 'antd/dist/antd.min.css';
import '../assets/main.css';

const { Content } = Layout;

const LiveMenu = (props) => {
    const [data, setData] = useState([])
    const getData = () => {
        fetch("/livemenu/"+props.vendor, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
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
    var iheight='150px';
    var iwidth='150px';
    var width='100vw';
    var align='end'
    var isCenter=true
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
    return(
            <div style={{padding:"5%" }}>
                
                
                {data.map((item, index) => {
                    const key = index + 1;
                    if(isCenter){
                        return (<center><MenuCard title={item.name} width={width} iheight={iheight} iwidth={iwidth} content={item.desc} key={key} rateh={item.health} rateq={item.quality} div={item.desc} img={item.image}/></center>);
                    }
                    return (<MenuCard title={item.name} width={width} iheight={iheight} iwidth={iwidth} content={item.desc} key={key} rateh={item.health} rateq={item.quality} div={item.desc} img={item.image}/>);
                    
                })}
                
            </div>
    );
}

LiveMenu.defaultProps = {
    vendor: "Kitchen"
}

export default LiveMenu