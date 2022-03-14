import React, {useState, useEffect} from 'react';
import { Navigate} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { notification} from 'antd';
const Authenticate = (props) =>  {
    var [check, setCheck] = useState('wait')
    var [position, setPosition] = useState("wait")
    var pos = "";
    const getauth = () => {
        fetch('/authenticate', {
            method: 'GET',
        }).then(
            (result)=>{
                if (!result.ok) {
                    return {}
                }
                return result.json()
            }
        ).then(
            (result) => {
                if (result.result=='success') {
                    setCheck('success')
                    console.log(result.position)
                    console.log(props.position)
                    console.log(props.position.includes(position))
                    setPosition(result.position)
                } else {
                    setPosition('error')
                    setCheck('error')
                }
            }
        )
    }
    useEffect(()=> {
        getauth()
    }, [])
    if (check=='wait' || position=='wait') {
        return <h1>Loading....</h1>
    }else if (check=='success') {
        if (props.position.includes(position)) {
            return props.children;
        }
        return <Navigate to="/home" replace={true}/>
    } else {
        return <Navigate to="/" replace={true}/>
    }
}

Authenticate.defaultProps = {
    position: "Student"
}

export default Authenticate