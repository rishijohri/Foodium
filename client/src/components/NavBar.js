import React,{ useState } from 'react';
import { PageHeader, Drawer, Menu, Button, } from 'antd';
import { UserOutlined, MenuOutlined, CloseOutlined,} from '@ant-design/icons';
import { Link } from 'react-router-dom';
var NavBar = () => {
  const [menuvisible, setMenuvisible] = useState(false);
  // const [visibleSignUp, setVisibleSignUp] = useState(false);
  const showMenu = () => {
      setMenuvisible(true);
  };
  const onClose = () => {
      setMenuvisible(false);
  };
    return (
      <div>
      <PageHeader
                className="site-page-header"
                onBack={showMenu}
                title={<h3>Foodium</h3>}
                backIcon = {<MenuOutlined  style={{fontSize:'2h', paddingBottom:'1.3vh'}}/>}
                extra={[
                    <Button key="1.1" icon={<UserOutlined/>} />,
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
                  <Menu.Item key="2"><Link to="/qr-scan">QR Scanner</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/feedback">Feedback</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/upload-image">Upload Image</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/live-menu">Live Menu</Link></Menu.Item>
              </Menu>
            </Drawer>
      </div>
    );
}

export default NavBar;