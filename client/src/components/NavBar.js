import { Link } from "react-router-dom";
import { Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import '../assets/main.css';
import '../assets/NavBar.css';
import { Image } from 'antd';

import foodLogo from '../images/foodiumLogo.png';
const NavBar = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ margin: "0" }}>
            <MenuItem theme='light' key="home" style={{ padding: 0 }}>
                <Link to="/">
                    <Image src={foodLogo} height={"10vh"} width={"10vw"} preview={false} style={{ objectFit: "cover" }} />
                </Link>
            </MenuItem>
            <MenuItem key="feedback">
                <Link to="/feedback">Feedback</Link>
            </MenuItem>
            <MenuItem key="SignIn">
                <Link to="/sign-in">Sign In</Link>
            </MenuItem>
            <MenuItem key="SignUp">
                <Link to="/sign-up">Sign Up</Link>
            </MenuItem>
            <MenuItem key="QRScanner">
                <Link to="/qr-scan">QR Scan</Link>
            </MenuItem>

            <MenuItem key="user" style={{ float: 'right', marginLeft: 'auto' }}>
                <Avatar icon={<UserOutlined />} />
            </MenuItem>
        </Menu>
    );
}

export default NavBar;