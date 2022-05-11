import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router'
import {Tabs, Typography, Layout,notification, Drawer,  Button, Modal,Image} from 'antd';
import { CloseOutlined  } from '@ant-design/icons';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import VendorMenu from '../components/vendorMenu';
const { Content, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;
const MasterMenuPage = (props) => {
    const [data, setData] = useState([])
    const getData = () => {
        console.log("entered getDATA")
        fetch("/mess/messvendors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'hashing': window.localStorage.getItem('hash')
            }
        }).then((res) => {
            if (!res.ok) {
                return {}
            }
            return res.json()
        }).then(
            (res) => {
                if (res.result==="success") {
                    // console.log(res.menuItems)
                    setData(res.vendors)
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
    useEffect(() => {
        getData()
    }, []);
    let days = [
        'su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'
    ]
    return (
        <Layout>
            <NavBar username={props.username}/>
            <Content>
            <Tabs tabPosition={'top'} animated={{inkbar:false, tabPane:true}} centered={true}>
            {data.map((dt, j)=> {
                return <>
                <TabPane tab={dt.value} key={j}>
                    <Tabs tabPosition={'top'} animated={{inkbar:false, tabPane:true}} centered={true}>
                        {days.map((d, ind)=> {
                            return <>
                                <TabPane tab={d} key={ind}>
                                <Tabs tabPosition={'top'} animated={{inkbar:false, tabPane:true}} centered={true}>
                                    <TabPane tab='breakfast' key={0}> 
                                        <VendorMenu vendor={dt.value} time='breakfast' day={d}/>
                                    </TabPane>
                                    <TabPane tab='lunch' key={1}>
                                        <VendorMenu vendor={dt.value} time='lunch' day={d}/>
                                    </TabPane>
                                    <TabPane tab='dinner' key={2}>  
                                        <VendorMenu vendor={dt.value} time='dinner' day={d}/>
                                    </TabPane>
                                </Tabs>
                                </TabPane>
                            </>
                        })}
                    </Tabs>
                </TabPane>
                </>
            })}
            </Tabs>
            </Content>
            </Layout>
      );
}

export default MasterMenuPage;