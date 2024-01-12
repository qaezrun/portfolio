import React from 'react';
import './pop.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVisibility } from "../../redux/alertSlice";


function Pop(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDirection = (e) =>{
        if(props.for === "message-creation"){
            if (!props.status){
                dispatch(setVisibility(props.status))
            }else{
                navigate('Down')
            }
        }else if(props.for === "mail-sending"){
            dispatch(setVisibility(props.status))
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