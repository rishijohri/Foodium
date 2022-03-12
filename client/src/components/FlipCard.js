import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
import Slider from './Slider'
import FlipCardBack from '../components/FlipCardBack'
import back1 from '../images/a.jpg';


import { Layout, Card, Col, Row, Typography, Button } from 'antd';

var FlipCard = (props) => {
  
  var[isFlipped,setIsFlipped]=useState(false)
  var handleClick=()=>{
    setIsFlipped(!isFlipped)
  }

    return (
      <div >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card style={{height: '40vh', width: '35vw',marginBottom:'15vh'}} onClick={handleClick} cover={<img src={back1} style={{objectFit: "cover"}}/>}title="Mess" bordered={true} >
          Front
        </Card>

        <Card style={{height: '50vh', width: '35vw',marginBottom:'15vh'}} onClick={handleClick} cover={ <p>quality: {2}</p>} title="Mess" bordered={true} >
          Back
        </Card>
      </ReactCardFlip>
      
      </div>
      
      
    )
  }

export default FlipCard;