import React, { useState, useEffect } from 'react';
import { Layout, Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
const { Content, Footer } = Layout;


const CanteenOrderPage = (props) => {
    const [data, setData] = useState([])
    const [dis, setDis] = useState(false)
    function getData() {
        fetch('/canteen/getorders/'+props.username, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        }).then(res => {
            if (!res.ok)
                return {}
            return res.json()
        }).then(res => {
            if (res.result==='success') {
                console.log(res.orders)
                setData(res.orders)
            } else {
                console.log('FAIL')
            }
        })
    }
    useEffect(()=> {
        getData()
    }, [])
    const onRefresh = () => {
        getData()
        setDis(true)
        setTimeout(() => {
            setDis(false)
        }, 5000)
    }
    return (
        <Layout>
            <NavBar username={props.username}/>
            <Content>
                <center>
                <Button disabled={dis} onClick={onRefresh}>Refresh</Button>
                </center>
                {data.map((item) =>{
                    return <OrderCard 
                            payment={item.payment}
                            status={item.orderStatus}
                            order={item.order}
                            username={item.username}
                            item={item}
                             />
                })}
            </Content>
            </Layout>
      );
}

export default CanteenOrderPage;