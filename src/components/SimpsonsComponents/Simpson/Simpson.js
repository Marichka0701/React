import React from 'react';
import '../Simpson/Simpson.css';

const Simpson = (props) => {
    const {name, surname, age, gender, photo} = props.simpson;

    return (
        <div className='simpson_container'>
            <img src={photo} alt={name}/>
            <h1>Full name: {name} {surname}</h1>
            <h2>Age: {age} years old</h2>
            <h2>Gender: {gender}</h2>
        </div>
    );
};

export default Simpson;