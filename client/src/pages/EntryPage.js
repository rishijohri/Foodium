import { Outlet } from 'react-router';
import { Layout } from 'antd';
import NavBar from '../components/NavBar'
import { Carousel } from 'antd';
import { Image } from 'antd';
import back1 from '../images/a.jpg';

import 'antd/dist/antd.min.css';
import '../assets/main.css';
const { Header, Footer, Sider, Content } = Layout;
const contentStyle = {
    height: '10vh',
    color: '#fff',
    lineHeight: '0',
    textAlign: 'center',
    background: '#364d79',
    margin: '0',
    display: 'block',
    // objectFit:"cover"
};
const EntryPage = () => {
    return (
        <Layout style={{ padding: '0' ,margin:'0',height:'100vh'}} >
            <Header style={{ padding: '0' }}>
                <NavBar />
            </Header>
            <Content >
                <Carousel autoplay={true} >
                   
                        {new Array(4).fill(null).map((_, index) => {
                            
                            const key = index + 1;
                            return(
                                <div style={contentStyle}> 
                                    <Image
                                        width={'100vw'}
                                        height={'87vh'}
                                        style={{objectFit:"cover" }}
                                        src={back1}
                                        preview={false}
                                    />
                                </div>
                            );

                        })}
                   
                    
                </Carousel>,
            </Content>

            {/* <Footer>Footer</Footer> */}
        </Layout>

    );
}
export default EntryPage