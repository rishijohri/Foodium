import { Card } from 'antd';

const announcementCard = (props) => {
  return (
    <Card size="small" title={props.title} extra={<a href="#">More</a>} style={{ width: props.width }}>
      <p>{props.description}</p>
    </Card>
  );
}

export default announcementCard