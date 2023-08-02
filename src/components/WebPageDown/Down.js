import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import {useEffect,useState} from 'react';
import './Down.css';
import {RiMailSendLine} from 'react-icons/ri';
import Pop from '../PopUps/pop';
import Loader from '../PopUps/loader';

function Reviews() {
    const [Data, setFetchedData] = useState([]);
    const [header, setHeader] = useState('');
    const [desc, setDesc] = useState('');
    const [btn, setBtn] = useState('');
    const [buttonPopUp,setButtonPopUp] = useState(false);
    const [loadingTrig,setLoadingTrig] = useState(false);
    const [stat, setStatus] = useState(false);
    
    /*useEffect(()=>{
        let processing = true
        fetchData(processing)
        return () =>{
            processing = false
        }
    },[])*/

    const fetchData = async(processing) =>{
        await axios.get('/messages').then(res =>{
            if(processing){
                setFetchedData(res.data)
                console.log(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };

    const CountdownTimer = ({ targetDate }) => {
        const calculateTimeRemaining = (targetDate) => {
        const targetTime = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const diff = targetTime - now;
        
        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
            return {
                days: days,
                hours: hours % 24,
                minutes: minutes % 60,
                seconds: seconds % 60,
            };
        };
        
        const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
    
        useEffect(() => {
            const interval = setInterval(() => {
                setTimeRemaining(calculateTimeRemaining(targetDate));
            }, 1000);
        
            return () => clearInterval(interval);
        }, [targetDate]);
        
        const { days, hours, minutes, seconds } = timeRemaining;
        
        return (
            <div>
                <div>
                <span>{days}</span> days&nbsp;
                <span>{hours}</span> hours&nbsp;
                <span>{minutes}</span> minutes&nbsp;
                <span>{seconds}</span> seconds
                </div>
            </div>
        );
    };
    const targetDate = '2023-12-26T23:59:59';
    const [myemail, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(myemail) {
        return /\S+@\S+\.\S+/.test(myemail);
    }

    const email = e => {
        if (!isValidEmail(e.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setEmail(e.target.value);
    };

    const handleMailSending = (e) =>{
        e.preventDefault()
        if(myemail === ''){
            setHeader("Please add a valid email first!");
            setDesc("Feel free to include a dummy email address if you have any concerns about revealing your real identity.");
            setBtn("Ok!");
            setButtonPopUp(true)
        }else if(error === 'Email is invalid'){
            setHeader("The provided email is not valid.");
            setDesc("Feel free to include a dummy email address if you have any concerns about revealing your real identity.");
            setBtn("Ok!");
            setButtonPopUp(true)
        }else{
            axiosPostData()
        }
    }

    const axiosPostData = async()=>{
        const postData = {
            email:myemail.trim()
        }
        try {
            setLoadingTrig(true)
            await axios.post('https://encouraging-fawn-gown.cyclic.app/emails',postData)
            .then(res=> {
                setHeader(res.data.header)
                setDesc(res.data.desc)
                setBtn(res.data.btn)
                setButtonPopUp(true)
                setEmail('')
            }).catch(err => {
                setHeader("Apologies, fatal error occured!")
                setDesc("I hope Danniel is aware of this and can fix it soon. Please try again later.")
                setBtn("Ok!")
                setButtonPopUp(true)
            })
        } catch (error) {
            setHeader("Apologies, fatal error occured!")
            setDesc("I hope Danniel is aware of this and can fix it soon. Please try again later.")
            setBtn("Ok!")
            setButtonPopUp(true)
        } finally{
            setLoadingTrig(false)
        }
    }
    
    return (
        <div className='main-con-two'>
            <div className='sub-con-two'>
                <div className='timer'>
                <CountdownTimer targetDate={targetDate} />
                </div>
                <div className='notify'>
                    <label>Receive updates:</label>
                    <div className='mailer'>
                        <input type='email' placeholder='johndoe@gmail.com' value={myemail} onChange={email} required/>
                        <button className='mail' onClick={handleMailSending}>Send<RiMailSendLine className='send-icon'/></button>
                        <Loader trigger={loadingTrig}></Loader>
                        <Pop trigger={buttonPopUp} setTrigger={setButtonPopUp} text={btn} status={stat} for={"mail-sending"}>
                            <h4>{header}</h4>
                            <hr />
                            <p>{desc}</p>
                        </Pop>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews