import React, { useState } from 'react';
import {useNavigate} from 'react-router'
import { Form, Typography, Input, Button, Radio, Slider, Card, Layout, DatePicker, notification, Rate } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import NavBar from '../components/NavBar';
import 'antd/dist/antd.min.css';
import '../assets/main.css';
// import '../assets/main.css'
const { Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;


function sendFeedback(data, nav) {
    console.log(data)
    var req = {
        method: 'POST',
        body : JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch('/feedback', req).then((res)=> {
        if (!res.ok)
            return {};
        return res.json();
    }).then((res)=> {
        if (res.result==='success') {
            notification.open({
                message: 'Success',
                description:
                'Thank you for filling out the form',
              });
              window.location.reload();
        } else {
            notification.open({
                message: 'Failed',
                description:
                'unable to submit. Please try again later. :(',
              });
            console.log()
        }
    })
}

const FeedbackPage = () => {
    const [form] = Form.useForm();
    const [hiddenField, setHiddenField] = useState('text')
    const navigate = useNavigate()
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const onFinish = (values) => {
        console.log('Success:', values);
        sendFeedback(values, navigate)
    };
    const onValuesChange = (_, allv) => {
        if (allv.vendorName === 'Mess')
        {
            setHiddenField('')
        } else {
            setHiddenField('none')
        }
    }
    
    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    return (
        <Layout className='layout'>
            <NavBar/>
            <Content style={{ padding: '0 5%', margin:' 2%'}}>
                <Title level={2}>Feedback</Title>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        vendorName: "Mess",
                        rating: 0,
                        clean: 0,
                        speed: 0,
                        name: "",
                        comment: ""
                    }}
                    requiredMark='optional'
                    onFinish={onFinish}
                    onValuesChange={onValuesChange}
                >
                    <Card>
                    <Form.Item label="Choose Vendor" name="vendorName" >
                        <Radio.Group >
                            <Radio.Button value="Mess">Mess</Radio.Button>
                            <Radio.Button value="Canteen">Canteen</Radio.Button>
                            <Radio.Button value="Other">Other Vendor</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item label="Choose Slot" name="slotName" style={{display:hiddenField}}>
                        <Radio.Group>
                            <Radio.Button value="Breakfast">Breakfast</Radio.Button>
                            <Radio.Button value="Lunch">Lunch</Radio.Button>
                            <Radio.Button value="Dinner">Dinner</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item label="Enter name" required="optional" tooltip="This is an optional field" name="name">
                        <Input placeholder="Enter Name (Optional)" />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="date" label="Date of Feedback" {...config}>
                        <DatePicker />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="rating" label="Rating">
                    <Rate tooltips={desc} />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="clean" label="Cleanliness">
                    <Rate tooltips={desc}/>
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="speed" label="Speed of Service">
                    <Rate tooltips={desc} />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="taste" label="Taste of Food">
                    <Rate tooltips={desc} />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="overallFood" label="Overall Food Quality">
                    <Rate tooltips={desc} />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="overallService" label="Overall Service">
                    <Rate tooltips={desc} />
                    </Form.Item>
                    </Card>
                    <Card>
                    <Form.Item name="comment" label="Comments"
                        tooltip={{
                            title: 'Any additional comments',
                            icon: <InfoCircleOutlined />,
                        }}
                    >
                        <TextArea placeholder="Enter Details here" rows={4}/>
                    </Form.Item>
                    </Card>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Content>

        </Layout>
    );
};
export default FeedbackPage;