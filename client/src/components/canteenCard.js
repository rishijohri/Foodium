import React,{ useState } from 'react';
import { Row,Col,  Card, Rate, Image, Typography,Badge, Button, Switch, Divider, Avatar } from 'antd';
import { UserOutlined, MenuOutlined, CloseOutlined,MinusOutlined, PlusOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
const { Title } = Typography;
const ButtonGroup = Button.Group;

const CanteenCard = (props) => {
    const [count, setCount] = useState(0);
    let increase = (id,setCart) => {
        setCount(prevState=>prevState+1)
        setCart(prevState=>[...prevState,id])
    };
    
    let decline = (id,cart,setCart) => {
        let newCount = count - 1;
        // let tempCart=[...cart];

        
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount)
        // tempCart.splice(tempCart.splice(item=>item===id))
        // setCart(tempCart)

    };

    return (
        <Card style={{width:props.width}}>
            <Row gutter={[props.hg, props.vg]} justify="space-between">
                <Col span={props.spanc}>
                    <Title level={props.level}>{props.title}</Title>
                    <p>{props.content}</p>
                    Health: <Rate disabled defaultValue={props.rateh} /><br/>
                    Quality: <Rate disabled defaultValue={props.rateq} />
                </Col>
                <Col span={props.spani}>
                    <Row >
                        <Image src={props.img} width={props.iwidth} height={props.iheight} style={{ objectFit: "cover" }}/>
                    </Row>
                    <Row style={{padding:'1vh'}}>
                        <ButtonGroup>
                            <Button onClick={decline}>
                                <MinusOutlined />
                            </Button>
                            <Button>
                                {count}
                            </Button>
                            <Button onClick={increase}>
                                <PlusOutlined />
                            </Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

CanteenCard.defaultProps = {
    iwidth: "150px",
    iheight: "150px",
    width: "100vw",
    // height: "22vh",
    hg: 6,
    vg: 6,
    spanc: 12,
    spani: 10,
    img: '',
    content: "nothing",
    title: "Not",
    level: 3,
    rateh: 2,
    rateq: 2

}

export default CanteenCard