import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router'
import {Tabs, Typography, Layout,notification, Drawer,  Button, Modal,Image} from 'antd';
import { CloseOutlined  } from '@ant-design/icons';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
import VendorMenu from '../components/vendorMenu';
import AddMenuPage from './AddMenuPage';
const { Content, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;
const ChangeMenuPage = (props) => {
    const [addItem, setAddItem] = useState(false) 
    const [time, setTime] = useState('breakfast')
    const [day, setDay] = useState('mo')
    let days = [
        'mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'
    ]
    let times = [
        'breakfast', 'lunch', 'dinner'
    ]
    return (
        <Layout>
            <NavBar/>
            <Content>
            <Tabs tabPosition={'top'} animated={{inkbar:false, tabPane:true}} centered={true}>
            {days.map((d, ind)=> {
                return <>
                    <TabPane tab={d} key={ind}>
                    <Tabs tabPosition={'top'} animated={{inkbar:false, tabPane:true}} centered={true}>
                    {times.map((tim, ink)=> {
                        <TabPane tab={tim} key={ink}>
                            <center><Button onClick={()=>{
                                setTime(tim)
                                setDay(d)
                                setAddItem(true)
                            }} >Add Item</Button></center>
                            <VendorMenu vendor={props.username} time='breakfast' day={day}/>
                        </TabPane>
                    })}
                    </Tabs>
                    </TabPane>
                </>
            })}
            
            </Tabs>
            </Content>
            <Footer>
            <Drawer
                    title={<Button shape='circle' icon={<CloseOutlined /> } onClick={()=>{setAddItem(false)}}/>}
                    placement="right"
                    type={'Add MenuItem'}
                    onClose={()=>{setAddItem(false)}}
                    visible={addItem}
                    closable={false}
                    headerStyle={{ position: 'center',textAlign:'center' }}
                >
                <AddMenuPage time={time} day={day}/>
            </Drawer>
            </Footer>
            </Layout>
      );
}

export default ChangeMenuPage;