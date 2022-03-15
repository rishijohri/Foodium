import React,{ useState } from 'react';
import { PageHeader, Drawer, Menu, Button,Dropdown,notification} from 'antd';
import { UserOutlined, MenuOutlined, CloseOutlined,} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router'
import 'antd/dist/antd.min.css';
import '../assets/main.css';

const {SubMenu} = Menu
var NavBar = () => {
  const navigate = useNavigate()
  const [menuvisible, setMenuvisible] = useState(false);
  
  const showMenu = () => {
      setMenuvisible(true);
  };
  const onClose = () => {
      setMenuvisible(false);
  };

  const logOut=()=>{
      fetch('/logout',{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
      }
      }).then((res)=>{
        if(!res.ok){
          return{}
        }
        return res.json()
      }).then((res)=>{
        if(res.result==="success"){
            console.log('Logged Out Successfully')
            notification.open({
              message: 'Logged Out',
              description:
                  'Successfully',
          });
            return navigate("/ ", {replace:true})
        }
        else{
          notification.open({
            message: 'Failed',
            description:
                'unable to logout :(',
        });
        }
      })
  }
  const menu = (
    <Menu>
      <Menu.Item key='1' onClick={logOut}>        
          Logout        
      </Menu.Item>
      <Menu.Item key='2'>        
          Payment History        
      </Menu.Item>
      
    </Menu>
  );
  const DropdownMenu = () => (
    <Dropdown key="more"  overlay={menu} placement="bottomRight">
      <Button type="text" icon={<UserOutlined style={{ fontSize: 20 }} />} />
    </Dropdown>
  );
    return (
      <div>
      <PageHeader
                className="site-page-header"
                onBack={showMenu}
                title={<h3>Foodium</h3>}
                backIcon = {<MenuOutlined  style={{fontSize:'2h', paddingBottom:'1.3vh'}}/>}
                extra={[
                  <DropdownMenu key="more" />
                ]}
            />
        <Drawer
            title={<Button shape='circle' icon={<CloseOutlined /> } onClick={onClose}/>}
            placement="left"
            type='Menu'
            onClose={onClose}
            visible={menuvisible}
            closable={false}
            headerStyle={{ position: 'center',textAlign:'center' }}
                >
                {/*Add Menu Items Here  */}
                <Menu
                  mode="inline"
                >
                  <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/mess-pay">Mess Payment</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/feedback">Feedback</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/inspection">Inspection</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/live-menu">Live Menu</Link></Menu.Item>
              </Menu>
            </Drawer>
      </div>
    );
}

export default NavBar;