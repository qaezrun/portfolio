import React from 'react';
import './pop.css';
import { useNavigate } from 'react-router-dom';

function Pop(props) {
    const navigate = useNavigate()
    const handleDirection = (e) =>{
        if (!props.status){
            props.setTrigger(props.status)
        }else{
            navigate('reviews')
        }
    }
    return (props.trigger) ? (
        <div className='main'>
            <div className='sub-pop'>
                {props.children}
                <button onClick={handleDirection}>{props.text}</button>
            </div>
        </div>
    ) : "";     
}

export default Pop