import { Layout, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import MenuCard from '../components/menuCard';
import NavBar from '../components/NavBar';
const { Content } = Layout;

const LiveMenuPage = () => {
    const [data, setData] = useState([])
    const getData = () => {
        const vendor = "Kitchen"
        fetch("/livemenu/"+vendor, {
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
    return(
        <Layout>
            <NavBar/>
            <Content style={{padding:"5%"}}>
                {data.map((item, index) => {
                    const key = index + 1;
                    return (<MenuCard title={item.name} key={key} rateh={item.health} rateq={item.quality} content={item.desc} img={item.image}/>);
                })}
            </Content>
        </Layout>
    );
}

export default LiveMenuPage