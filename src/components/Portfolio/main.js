import React from 'react'
import './main.css'
import myimage from '../Images/3x3.jpg'
import {RiGithubFill,RiFacebookBoxFill,RiInstagramFill,RiLinkedinBoxFill} from 'react-icons/ri';

function Main() {
    return (
        <div className='container'>
            <div className='sub-container'>
                <div className='profile'>
                    <div className='profile-box'>
                        <div className='image-holder'>
                            <div className='circular-port-image'>
                                <img src={myimage} alt="test" className='imageItself'/>
                            </div>
                        </div>
                        <div className='data-holder'>
                            <div className='name-holder'>
                                <h5>Danniel Paez</h5>
                                <p>Web Developer | Game Developer</p>
                            </div>
                            <div className='socials-holder'>
                                <RiGithubFill className='icons'/>
                                <RiFacebookBoxFill className='icons'/>
                                <RiInstagramFill className='icons'/>
                                <RiLinkedinBoxFill className='icons'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects'></div>
            </div>
        </div>
    )
}

export default Main