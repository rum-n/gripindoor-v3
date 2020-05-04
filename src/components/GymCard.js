import React from 'react';
import './styles.css';

const GymCard = (props) => {
    return (
    <div className='gymCard'>
        <p className='gymName'>{props.title}</p>
        <p className='gymBlurb'>{props.blurb}</p>
        <p className='gymTech'>{props.techstack}</p>
        <img className='gymCardImage' src={props.image} />
    </div>
    );
}

export default GymCard;