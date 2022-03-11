import { Menu, Button } from 'antd';
import React,{ useState } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
const {Sider } = Layout;
const { SubMenu } = Menu;
var NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapse => {
      console.log(collapse);
      setCollapsed(collapse);
    };
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<PieChartOutlined  />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<PieChartOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<PieChartOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
    );
}

export default NavBar;