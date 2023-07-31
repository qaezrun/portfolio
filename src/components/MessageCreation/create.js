import React from 'react'
import './create.css';
import {RiSendPlaneFill} from 'react-icons/ri';
import Pop from '../PopUps/pop';
import axios from 'axios'
//import Cookies from 'js-cookie'
import { useState} from 'react';

function Create() {
    const [header, setHeader] = useState('');
    const [desc, setDesc] = useState('');
    const [btn, setBtn] = useState('');
    const [buttonPopUp,setButtonPopUp] = useState(false);
    const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
    const [message,setMessage] = useState('');
    const [stat, setStatus] = useState(false);

    const recalculate = e => {
        setMessage(e.target.value)
        ChangeTextAreaCount(e.target.value.length);
    };
    
    const axiosPostData = async()=>{
        const postData = {
            message:message.trim()
        }
        await axios.post('http://localhost:4000/reviews',postData)
        .then(res=> {
            setHeader(res.data.header)
            setDesc(res.data.desc)
            setBtn(res.data.btn)
            setStatus(true)
            //Cookies.set('visitHistory',res.data.visited);
            setButtonPopUp(true)
            setMessage('');
            ChangeTextAreaCount(0)
        }).catch(err => {
            setHeader("Apologies, fatal error occured!")
            setDesc("I hope Danniel is aware of this and can fix it soon. Please try again later.")
            setBtn("Ok!")
            setStatus(false)
            setButtonPopUp(true)
            setMessage('');
            ChangeTextAreaCount(0)
        })
    }
    
    const handleSending = (e) =>{
        e.preventDefault()
    
        if(textAreaCount > 0){
            axiosPostData()
        }else{
            setHeader("Input text first!");
            setDesc("You're free to express your thoughts about me, cursing is not prohibited.");
            setBtn("Ok!");
            setStatus(false)
            setButtonPopUp(true)
        }
    }
    
    return (
        <div className="main-con">
            <div className='sub-con'>
                <h4>This box is open to the public, you can express yourself against Danniel.</h4>
                <div className='textMessage'>
                <p>{textAreaCount}/150</p>
                <textarea type="text" className='message' placeholder='Enter message..' value={message} onChange={recalculate} maxLength={150}></textarea>
                </div>
                <button className='btn' onClick={handleSending} >Send<RiSendPlaneFill className='send-icon'/></button>
            </div>
            <Pop trigger={buttonPopUp} setTrigger={setButtonPopUp} text={btn} status={stat}>
                <h4>{header}</h4>
                <hr />
                <p>{desc}</p>
            </Pop>
        </div>
    );
}

export default Create