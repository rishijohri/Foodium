import React from 'react';
import { Navigate} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { asyncAuthenticate } from '../features/authSlice';
import { notification} from 'antd';
export function Authenticate(props) {
    var [check, setCheck] = useState('wait')
    fetch('/authenticate', {
        method: 'GET',
        body: "Check"
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
                check = setCheck('success')
            } else {
                check = setCheck('error')
            }
        }
    )
    if (check=='wait') {
        return <h1>Loading....</h1>
    }else if (check=='success') {
        return props.children;
    } else {
        notification.open({
            message:'Not a valid user',
            discription:'Sign in again'
        })
        return <Navigate to="/" replace={True}/>
    }
}