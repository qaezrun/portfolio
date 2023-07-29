import React from 'react';
import './pop.css';

function Pop(props) {
    return (props.trigger) ? (
        <div className='main'>
            <div className='sub-pop'>
                {props.children}
                <button onClick={() => props.setTrigger(false)}>{props.text}</button>
            </div>
        </div>
    ) : "";
}

export default Pop