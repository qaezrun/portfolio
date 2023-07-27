import React from 'react';
import './App.css';
import {RiSendPlaneFill} from 'react-icons/ri';
import Pop from './components/pop';
import { useState} from 'react';
import axios from 'axios'

function App() {
  const [header, setHeader] = useState('');
  const [desc, setDesc] = useState('');
  const [btn, setBtn] = useState('');
  const [buttonPopUp,setButtonPopUp] = useState(false);
  const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
  const [message,setMessage] = useState('');

  const recalculate = e => {
    setMessage(e.target.value)
    ChangeTextAreaCount(e.target.value.length);
  };

  const axiosPostData = async()=>{
    const postData = {
      message:message
    }
    await axios.post('http://localhost:4000/reviews',postData)
    .then(res=> {
      setHeader(res.data.header)
      setDesc(res.data.desc)
      setBtn(res.data.btn)
      setButtonPopUp(true)
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
      setButtonPopUp(true)
    }
    setMessage('')
  }

  return (
    <div className="App">
      <div className='sub-con'>
        <h4>This box is open to the public, you can express yourself against Danniel.</h4>
        <div className='textMessage'>
          <p>{textAreaCount}/150</p>
          <textarea type="text" className='message' placeholder='Enter message..' onChange={recalculate} maxLength={150}></textarea>
        </div>
        <button className='btn' onClick={handleSending} >Send<RiSendPlaneFill className='send-icon'/></button>
      </div>
      
      <Pop trigger={buttonPopUp} setTrigger={setButtonPopUp} text={btn}>
        <h4>{header}</h4>
        <hr />
        <p>{desc}</p>
      </Pop>

    </div>
  );
}

export default App;
