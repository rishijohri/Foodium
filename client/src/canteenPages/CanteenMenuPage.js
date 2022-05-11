import React, { useState, useEffect } from 'react';
import { Layout, Drawer, Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import NavBar from '../components/NavBar';
import CMenuCard from '../components/CMenuCard';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
const { Content, Footer } = Layout;
const CanteenMenuPage = (props) => {
    const [cart, setCart] = useState([])
    const [data, setData] = useState([])
    function getData() {
        fetch('/canteen/getmenu/'+props.username, {
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
                setData(res.canteenItems)
                let arr = []
                for (let i=0; i<res.canteenItems.length; i++) {
                    arr.push({
                        name: res.canteenItems[i].name,
                        qt: 0
                    })
                }
                setCart(arr)
            }
        })
    }
    useEffect(()=> {
        window.addEventListener('ct', getData)
        getData()
    }, [])
    const onChange = (val, name) => {
        let tmp = cart
        tmp[name] = val
        setCart(tmp)
    }
    return (
        <Layout>
            <NavBar username={props.username}/>
            <Content>
                {data.map((item) =>{
                    return <CMenuCard 
                            title={item.name}
                            rate={item.rating}
                            img={item.image}
                            pid={item._id}
                            vendor={item.vendor}
                            price={item.price}
                            onChange={onChange}
                             />
                })}
            </Content>
            <Footer>
            </Footer>
            </Layout>
      );
}

export default CanteenMenuPage;