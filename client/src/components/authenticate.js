import React, {useState, useEffect} from 'react';
import { Navigate} from 'react-router';
import { Spin, Space } from 'antd';
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
        return <center><Spin size="large" /></center>
    }else if (check=='success') {
        if (props.position.length<1 || props.position.includes(position)) {
            return props.children;
        }
        return <Navigate to={props.failPosRedirect} replace={true}/>
    } else {
        return <Navigate to={props.fail} replace={true}/>
    }
}

Authenticate.defaultProps = {
    position: ["Student"],
    failPosRedirect: "/home",
    fail: "/"
}

export default Authenticate