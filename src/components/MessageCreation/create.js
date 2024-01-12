import React from 'react'
import './create.css';
import {RiSendPlaneFill} from 'react-icons/ri';
import axios from 'axios'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoader } from '../../redux/loaderSlice';
import { setData,setVisibility } from '../../redux/alertSlice';

function Create() {
    const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
    const [message,setMessage] = useState('');
    const [codename,setCodeName] = useState('Unknown');
    const dispatch = useDispatch()

    const code = e => {
        setCodeName(e.target.value)
    };
    const recalculate = e => {
        setMessage(e.target.value)
        ChangeTextAreaCount(e.target.value.length);
    };
    
    const axiosPostData = async()=>{
        const postData = {
            message:message.trim(),
            codeName:codename.trim()
        }
        try {
            // setLoadingTrig(true)
            dispatch(toggleLoader(true))
            await axios.post('https://agile-jodhpurs-frog.cyclic.app/messages',postData)
            .then(res=> {
                dispatch(setData({
                    header: res.data.header,
                    desc: res.data.desc,
                    btntxt: res.data.btn,
                    for: "message-creation",
                    status: true
                }))
                dispatch(setVisibility(true))
                setMessage('');
                ChangeTextAreaCount(0)
            }).catch(err => {
                dispatch(setData({
                    header: "Apologies, fatal error occured!",
                    desc: "I hope Danniel is aware of this and can fix it soon. Please try again later.",
                    btntxt: "Ok!",
                    for: "message-creation",
                    status: false
                }))
                dispatch(setVisibility(true))
                    setMessage('');
                    ChangeTextAreaCount(0)
            })
        } catch (error) {
            dispatch(setData({
                header: "Apologies, fatal error occured!",
                desc: "I hope Danniel is aware of this and can fix it soon. Please try again later.",
                btntxt: "Ok!",
                for: "message-creation",
                status: false
            }))
            dispatch(setVisibility(true))
            setMessage('');
            ChangeTextAreaCount(0)
        } finally{
            dispatch(toggleLoader(false))
        }
    }
    
    const handleSending = (e) =>{
        e.preventDefault()

        if(textAreaCount >= 10){
            axiosPostData()
        }else if (textAreaCount >= 1 ){
            dispatch(setData({
                header: "Please ensure it's above 10 char!",
                desc:"I've given plenty of space for these messages, and it might seem odd if your message is under 10 characters.",
                btntxt: "Ok!",
                for: "message-creation",
                status: false
            }))
            dispatch(setVisibility(true))
        }else{
            // setButtonPopUp(true)
            dispatch(setData({
                header: "Input text first!",
                desc:"No need to worry about your identity; the form only asks for a short, anonymous message.",
                btntxt: "Ok!",
                for: "message-creation",
                status: false
            }))
            dispatch(setVisibility(true))
        }
    }
    
    return (
        <div className='sub-con'>
            <h4>Feel free to express your thoughts about Danniel, whether positive or negative.</h4>
            <div className='codeName'>
                <label>Code name:</label>
                <input type='text' value={codename} onChange={code}/>
            </div>
            <div className='textMessage'>
            <p>{textAreaCount}/150</p>
            <textarea type="text" className='message' placeholder='Enter message..' value={message} onChange={recalculate} maxLength={150}></textarea>
            </div>
            <button className='btn' onClick={handleSending}>Send<RiSendPlaneFill className='send-icon'/></button>
        </div>
    );
}

export default Create