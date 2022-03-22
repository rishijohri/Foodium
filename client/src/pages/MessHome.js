import { Avatar,Layout,Card,Col, Typography,Row} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';
import { faCashRegister,faBookOpenReader,faBookOpen,faComment,faFilePen,faUpload } from "@fortawesome/free-solid-svg-icons";
const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

const MessHome=()=>{
    var hg= 2;
    var vg=2;
    var span=12;
    if (isMobile) {
            hg= 1
            vg= 1
            span= 18
    } else {
            hg=12;
            vg= 6
            span= 10
    }
    return(
    
    <div>
    <Layout>
    <Content >
    
        {/* <Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faCashRegister }  />} />
        <Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faBookOpenReader } />} />
        <Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faBookOpen } />} />
        <Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faComment } />} />
        <Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faFilePen } />} />
        <Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faUpload } />} /> */}
        <div className="site -card-wrapper">
                    <Row gutter={[hg, vg]} justify={'center'}>
                        <Col span={span}>
                            <Link to="/mess-home"><Card   cover={<Avatar size={300} icon={<FontAwesomeIcon icon={ faBookOpenReader } />} />} title={<Title level={2} >Mess</Title>} bordered={true} /></Link>
                        </Col>
                        <Col span={span}>  
                            <Card   cover={<Avatar style={{margin:"10vh"}} size={300} icon={<FontAwesomeIcon icon={ faBookOpen } />} />} title={<Title level={2} >Canteen</Title>} bordered={true}/>
                        </Col>         
                    </Row>
                </div>
        </Content>
    </Layout>
        

    </div>
      
      
    )
    
}
export default MessHome;

