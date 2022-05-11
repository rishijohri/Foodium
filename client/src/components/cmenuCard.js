import React,{ useState} from 'react';
import { Row,Col,  Card, Rate, Image, Typography, Button, Input } from 'antd';
import { PlusCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import {isMobile} from 'react-device-detect';
import '../assets/main.css';
const { Title } = Typography;

const CMenuCard = (props) => {
    const [val, setVal] = useState(0)
    let iheight;
    let iwidth;
    let width;
    let isCenter=true
    if (isMobile) {
        iheight='15vh'
        iwidth='15vh'
        width='100vw'
        isCenter=false
    } else {
        iheight='10vw';
        iwidth='10vw';
        width='50vw'
    }
    const onChange = (v) => {
        setVal(v)
        props.onChange(v, props.name)
    }
    const onIncrement = ()=> {
        props.onChange(val+1, props.name)
        setVal(val+1)  
    }
    const onDecrement = () => {
        if (val>=1) {
            props.onChange(val-1, props.name)
            setVal(val-1)
        }

    }
    if (isCenter) {
        return (
            <center>
        <Card style={{width:width}}>
            <Row gutter={[props.hg, props.vg]} justify="space-between">
                <Col span={props.spanc}>
                    <Title level={props.level}>{props.title}</Title>
                    <p>{props.content}</p>
                    Rating: <Rate disabled defaultValue={props.rate} /><br/>
                    Price : {props.price} <br/>
                    <Input 
                        type='number' 
                        placeholder="Quantity"
                        defaultValue={0}
                        onChange={onChange}
                        value={val}
                        />
                    <Button onClick={onIncrement}><PlusCircleOutlined /></Button>
                    <Button onClick={onDecrement}>Something</Button>
                </Col>
                <Col span={props.spani}>
                    <Image src={props.img} width={iwidth} height={iheight} style={{ objectFit: "cover" }}/>
                </Col>
            </Row>
        </Card>
        </center>
    );
    } else {
        return (<Card style={{width:width}}>
            <Row gutter={[props.hg, props.vg]} justify="space-between">
                <Col span={props.spanc}>
                    <Title level={props.level}>{props.title}</Title>
                    <p>{props.content}</p>
                    Rating: <Rate disabled defaultValue={props.rate} /><br/>
                    Price : {props.price} <br/>
                    <Input 
                        type='number' 
                        placeholder="Quantity"
                        defaultValue={0}
                        onChange={onChange}
                        value={val}
                        /><br/>
                    <Button onClick={onIncrement}><PlusCircleOutlined /></Button>
                    <Button onClick={onDecrement}></Button>
                </Col>
                <Col span={props.spani}>
                    <Image src={props.img} width={iwidth} height={iheight} style={{ objectFit: "cover" }}/>
                </Col>
            </Row>
        </Card>)
    }
}

CMenuCard.defaultProps = {
    iwidth: "150px",
    iheight: "150px",
    width: "100vw",
    // height: "22vh",
    hg: 6,
    rate: 2,
    price: 0

}

export default CMenuCard