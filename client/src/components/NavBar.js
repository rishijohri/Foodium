import {Menu, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import '../assets/main.css';
import '../assets/NavBar.css';
const NavBar = () => {
    return (
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{margin:"0"}}>
                <MenuItem theme='light' key="home">Home</MenuItem>
                <MenuItem key="feedback">Feedback</MenuItem>
                <MenuItem key="user" style={{float:'right', marginLeft: 'auto'}}>
                    <Avatar icon={<UserOutlined/>}/>
                </MenuItem>
            </Menu>
    );
}

export default NavBar;