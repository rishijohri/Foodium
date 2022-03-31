import { Avatar,Layout,Card,Col, Typography,Row} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';
import { faCashRegister,faBookOpenReader,faBookOpen,faComment,faFilePen,faUpload } from "@fortawesome/free-solid-svg-icons";
import { icon } from '@fortawesome/fontawesome-svg-core';
import NavBar from '../components/NavBar'
const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

const MessHome=()=>{
    var compstor = [
        {ic: faCashRegister, name: 'Mess Payment', link: '/mess-pay', id: 1},
        {ic: faBookOpenReader, name: 'Live Menu Page', link: "/live-menu", id: 2},
        // {ic: faBookOpen, name: 'Book Open', link: '#'},        
        {ic: faUpload, name: 'Inspection', link: '/inspection', id: 3},
        {ic: faComment, name: 'Comment', link: '#', id: 4},
        {ic: faFilePen, name: 'Feedback', link: '/feedback', id: 5},
    ]
    const [hg, vg, span,size, mg] = isMobile ? [4, 0, 12, 150, -5] : [10, 15, 7,200, -5];

    return(
    
    <Layout  style={{overflowX: 'hidden',height:'100vh', width:'100vw'}}>
        <NavBar/>
    <Content>
        <div className="site-card-wrapper">
                    <Row gutter={[hg, vg]} justify='center' style={{ marginTop:{mg}}}>
                        {compstor.map(comp =>  <Col span={span} id={comp.id}>
                                    <Link to={comp.link}>
                                        <Card style={{backgroundColor:'#f1f1f1'}} >
                                            <center>
                                            <Avatar style={{margin:"auto", display:'block', backgroundColor: 'rgba(100, 0, 0, 0.85)'}} size={size} 
                                                    icon={<FontAwesomeIcon icon={ comp.ic }/>}
                                            />
                                            <Title level={5}>{comp.name}</Title>
                                            </center>
                                        </Card>
                                    </Link>
                                </Col>
                                
                            )}
                    </Row>
                </div>
        </Content>
        
    </Layout>
    
    )
    
}
export default MessHome;

