import { Carousel } from 'antd';
import { Image } from 'antd';
import back1 from '../images/a.jpg';

var props = {
    image_array: [back1],
    height: '87vh',
    width: '100vw'
}
var Slider = (props) => {
    // console.log(typeof image_array)
    // console.log(image_array[0])
    const contentStyle = {
        height: props.height,
        width: props.width,
        color: '#fff',
        lineHeight: '0',
        textAlign: 'center',
        background: '#364d79',
        margin: '0',
        display: 'block',
        // objectFit:"cover"
    };
    return (
        <div style={contentStyle}>
            <Carousel autoplay={true} >

                {props.image_array.map((src, index) => {

                    const key = index + 1;
                    return (
                        <div style={contentStyle}>
                            <Image
                                width={props.width}
                                height={props.height}
                                style={{ objectFit: "cover" }}
                                src={src}
                                preview={false}
                            />
                        </div>
                    );

                })}


            </Carousel>
        </div>

    )
}
Slider.defaultProps = {
    image_array: [back1, back1, back1],
    width: '10vw',
    height: '15vh'
}
export default Slider