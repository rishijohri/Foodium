import {Menu, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import '../assets/NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <MenuItem key="home"style={{float:'right', marginLeft: 'auto'}}>Home</MenuItem>
                <MenuItem key="feedback" style={{float:'right', marginLeft: 'auto'}}>Feedback</MenuItem>
                <MenuItem key="user" style={{float:'right', marginLeft: 'auto'}}>
                    <Avatar icon={<UserOutlined/>}/>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default NavBar;