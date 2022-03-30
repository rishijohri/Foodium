import React,{ useState } from 'react';
import { PageHeader, Drawer, Menu, Button,Dropdown,notification} from 'antd';
import { UserOutlined, ArrowLeftOutlined , CloseOutlined,} from '@ant-design/icons';
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
          <h3>Logout</h3>     
      </Menu.Item>
      <Menu.Item key='2'>        
        <h3>Payment History</h3>            
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
                onBack={() => window.history.back()}
                title={<Link to='/home'><h3>Foodium</h3></Link>}
                backIcon = {<ArrowLeftOutlined  style={{fontSize:'10h', paddingBottom:'1.4vh' }}/>}
                extra={[
                  <DropdownMenu key="more" />
                ]}
            />
        
      </div>
    );
}

export default NavBar;