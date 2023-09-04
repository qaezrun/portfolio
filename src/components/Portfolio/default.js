import React from 'react'
import './default.css'
import { useNavigate } from 'react-router-dom';
import {MdFolderCopy,MdPerson} from 'react-icons/md'
import { useState, useEffect } from 'react';

function Default() {

    const textToType = "Hey, I'm Danniel Paez, and this is my portfolio.";
    const typingSpeed = 80; // Adjust the typing speed (in milliseconds) as needed

    const [displayedText, setDisplayedText] = useState('');
    const [showTitle, setShowTitle] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
        if (currentIndex <= textToType.length) {
            setDisplayedText(textToType.slice(0, currentIndex));
            currentIndex++;
        } else {
            clearInterval(typingInterval);
            const title = setInterval(() => {
                setShowTitle(true);
                const skills = setInterval(() => {
                    setShowSkills(true);
                }, 500);
                return () => clearInterval(skills);
            }, 500);
            return () => clearInterval(title);
        }
        }, typingSpeed);

        return () => {
        clearInterval(typingInterval);
        };
    }, []);

    const navigate = useNavigate()
    const projectsClick = () => {
        navigate('Projects')
    };

    return (
        <div className='main-wrapper'>
            <div className='sub-wrapper'>
                <h1>{displayedText}</h1>
                {showTitle ? <h4 className='title animated animatedFadeInUp fadeInUp'>Web and Game Developer</h4> : null}
                {showSkills ? <div className='about-skills'>
                    <div className='holder-A-S animated animatedFadeInUp fadeInUp' onClick={projectsClick}>
                        <p>See my projects </p>
                        <MdFolderCopy className='icon-default'/>
                    </div>
                    <div className='holder-A-S animated animatedFadeInUp fadeInUp'>
                        <p>More about me</p>
                        <MdPerson className='icon-default'/>
                    </div>
                </div>: null}
            </div>
        </div>
    )
}

export default Default