import { Layout, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import MenuCard from '../components/menuCard';
const { Content } = Layout;

const LiveMenuPage = () => {
    const [data, setData] = useState([])
    const getData = () => {
        const vendor = "Dell"
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
            <Content>
                {data.map((item, index) => {
                    const key = index + 1;
                    return (<MenuCard title={item.name} key={key} content={item.quality} img={item.image}/>);
                })}
            </Content>
        </Layout>
    );
}

export default LiveMenuPage