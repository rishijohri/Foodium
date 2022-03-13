import React,{ useState } from 'react';
import { Row,Col,  Card, Rate, Image, Typography } from 'antd';
import { UserOutlined, MenuOutlined, CloseOutlined,} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const MenuCard = (props) => {


    return (
        <Card width={props.width} >
            <Row gutter={[props.hg, props.vg]}>
                <Col span={props.span}>
                    <Title level={props.level}>{props.title}</Title>
                    <p>{props.content}</p>
                    <Rate disabled defaultValue={props.rate} />
                </Col>
                <Col span={props.span}>
                    <Image src={props.img}/>
                </Col>
            </Row>
        </Card>
    );
}

MenuCard.defaultProps = {
    width: "100vw",
    hg: 6,
    vg: 6,
    span: 5,
    img: '',
    content: "nothing",
    title: "Not",
    level: 2,
    rate: 2

}

export default MenuCard