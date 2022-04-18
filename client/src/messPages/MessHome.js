import { Avatar,Layout,Card,Col, Typography,Row} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';
import { faCashRegister,faBookOpenReader,faComment,faFilePen,faUpload } from "@fortawesome/free-solid-svg-icons";
import NavBar from '../components/NavBar'
const { Content } = Layout;

const { Title } = Typography;

const MessHome=(props)=>{
    var compstor = [
        {ic: faCashRegister, name: 'Mess Payment', link: '/mess/mess-pay', id: 111},
        {ic: faBookOpenReader, name: 'Live Menu Page', link: "/mess/live-menu", id: 211},     
        {ic: faUpload, name: 'Inspection', link: '/mess/inspection', id: 311},
        {ic: faComment, name: 'Comment', link: '#', id: 411},
        {ic: faFilePen, name: 'Feedback', link: '/mess/feedback', id: 511},
    ]
    const [hg, vg, span,size, mg] = isMobile ? [4, 0, 12, 150, -5] : [10, 15, 7,200, -5];

    return <>
        <Layout  style={{overflowX: 'hidden',height:'100vh', width:'100vw'}}>
            <NavBar username={props.username}/>
            <Content >
                <div className="site-card-wrapper">
                    <Row gutter={[hg, vg]} justify='center' style={{ marginTop:{mg}}}>
                        {compstor.map(comp => 
                            <Col span={span} id={comp.id} key={comp.id}>
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
    </>   
}
export default MessHome;

