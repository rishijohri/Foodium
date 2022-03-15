import { Layout, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import MenuCard from '../components/menuCard';
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
                    console.log(res.reviews.length)
                    setData(res.reviews)
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
    return(
            <div style={{padding:"5%"}}>
                {data.map((item, index) => {
                    const key = index + 1;
                    return (<MenuCard title={item.name} content={item.desc} key={key} rateh={item.health} rateq={item.quality} div={item.desc} img={item.image}/>);
                })}
            </div>
    );
}

LiveMenu.defaultProps = {
    vendor: "Kitchen"
}

export default LiveMenu