import React from 'react'
import './create.css';
import {RiSendPlaneFill} from 'react-icons/ri';
import Pop from '../PopUps/pop';
import Loader from '../PopUps/loader';
import axios from 'axios'
//import Cookies from 'js-cookie'
import { useState } from 'react';
import UserMessages from '../CardsMessages/card';


function Create() {
    const [header, setHeader] = useState('');
    const [desc, setDesc] = useState('');
    const [btn, setBtn] = useState('');
    const [buttonPopUp,setButtonPopUp] = useState(false);
    const [loadingTrig,setLoadingTrig] = useState(false);
    const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
    const [message,setMessage] = useState('');
    const [codename,setCodeName] = useState('Unknown');
    const [stat, setStatus] = useState(false);

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
            setLoadingTrig(true)
            await axios.post('https://agile-jodhpurs-frog.cyclic.app/messages',postData)
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
        } catch (error) {
            setHeader("Apologies, fatal error occured!")
            setDesc("I hope Danniel is aware of this and can fix it soon. Please try again later.")
            setBtn("Ok!")
            setStatus(false)
            setButtonPopUp(true)
            setMessage('');
            ChangeTextAreaCount(0)
        } finally{
            setLoadingTrig(false)
        }
    }
    
    const handleSending = (e) =>{
        e.preventDefault()

        if(textAreaCount >= 10){
            axiosPostData()
        }else if (textAreaCount >= 1 ){
            setHeader("Please ensure it's above 10 char!");
            setDesc("I've given plenty of space for these messages, and it might seem odd if your message is under 10 characters.");
            setBtn("Ok!");
            setStatus(false)
            setButtonPopUp(true)
        }else{
            setHeader("Input text first!");
            setDesc("No need to worry about your identity; the form only asks for a short, anonymous message.");
            setBtn("Ok!");
            setStatus(false)
            setButtonPopUp(true)
        }
    }
    
    return (
        <div className="main-con">
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
            <div className='userRants'>
                <div className='message-holder-contents'>
                    <h2>Received Messages</h2>
                    <div className='rants-holder'>
                        <div className='themessages'>
                            <UserMessages/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader trigger={loadingTrig}></Loader>
            <Pop trigger={buttonPopUp} setTrigger={setButtonPopUp} text={btn} status={stat} for={"message-creation"}>
                <h4>{header}</h4>
                <hr />
                <p>{desc}</p>
            </Pop>
        </div>
    );
}

export default Create