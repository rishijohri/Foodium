import React, { useState ,useEffect} from 'react';
import {Table, notification,Layout} from 'antd';
import NavBar from '../components/NavBar';
const { Content } = Layout;
const PaymentHistoryPage=(props)=>{
    const [payments, setPayments] = useState([]);
    const getPaymentsHistory=()=>{
        fetch('/mess/historyhandler',{
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        }).then((res)=>{
            if(!res.ok){
                return{}
            }
            else return res.json()
        }).then((res)=>{
            if(res.result==="success"){
                console.log(res.payments)
                setPayments(res.payments)
                
            }
            else {
                notification.open({
                    message: 'Failed',
                    description:
                        'unable to fetch Payment History :(',
                })
            }
        })
    }

    useEffect(()=> {
        getPaymentsHistory()
        // console.log(payments)
    }, [])

        const columns = [
            { title: 'Date',dataIndex: 'date',key: 'date'},
            { title: 'Time',dataIndex: 'time', key: 'time'},
            {title:'Payment',dataIndex:'payment',key:'payment'},
            {title:'Balance',dataIndex:'balance',key:'balance'},
            {title:'Vendor',dataIndex:'vendor',key:'vendor'}
        ];
    return(
        <div>  
            <Layout>    
            <NavBar username={props.username}/>     
                <Content style={{padding:'2vh 10vh 2vh 10vh'}}>
                    <Table dataSource={payments} columns={columns} />
                </Content>
            </Layout>
        </div>
    )
}
export default PaymentHistoryPage