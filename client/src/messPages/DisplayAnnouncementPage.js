import { Layout, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import AnnouncementCard from '../components/announcementCard';
import {isMobile} from 'react-device-detect';
import 'antd/dist/antd.min.css';
import '../assets/main.css';

const { Content } = Layout;

const LiveMenu = (props) => {
    const [data, setData] = useState([])
    const today = new Date()
    let d = today.getDay()
    let h = today.getHours()
    let days = [
        'su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'
    ]
    let day = days[d]
    if (h<10) {
        h = 'breakfast'
    } else if (h<15){
        h='lunch'
    } else {
        h='dinner'
    }
    const getData = () => {
        fetch("/mess/livemenu/"+props.vendor+'/'+day+'/'+h, {
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
    let [width, isCenter] = isMobile ? ['100vw', false] : ['50vw', true]
    return(
            <div style={{padding:"5%" }}>
                
                {data.map((item, index) => {
                    const key = index + 1;
                    if(isCenter){
                        return (<center>
                            <AnnouncementCard 
                            title={item.title} 
                            description={item.description}
                            width={width} /></center>);
                    }
                    return (
                        <AnnouncementCard 
                        title={item.title} 
                        description={item.description}
                        width={width} />);
                    
                })}
                
            </div>
    );
}

export default LiveMenu