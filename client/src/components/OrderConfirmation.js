import React, { useState,useEffect } from 'react';
import { Drawer, Button, Space, Radio ,List, message, Avatar, Skeleton, Divider} from 'antd';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
const OrderConfirmation= (props) => {
  
  return (
    <>
      <Drawer
        title="Confirm the order"
        placement='bottom'
        width={500}
        // onClose={onClose}
        visible={props.visible}
        extra={
          <Space>
            <Button onClick={onClose}>Confirm</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <List
          dataSource={props.orders}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={item.name}
                description={`price - ${item.price}`}
              />
              <div>{item.quantity}</div>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default App;