import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
import Slider from './Slider'


import { Layout, Card, Col, Row, Typography, Button } from 'antd';

var FlipCardBack = (props) => {
    return (
        <>
            <p>quality: {props.quality}</p>
            <p>health: {props.health}</p>
        </>
    );
}

export default FlipCardBack;