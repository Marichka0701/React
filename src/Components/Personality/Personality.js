import React from 'react';
import '../Personality/Personality.css';
const Personality = (props) => {
    const { id, name, status, species, gender, image } = props.person;
    return (
        <div>
            <div className='personality_container'>
                <img src={image} alt={name}/>
                <h1>ID: {id}</h1>
                <h1>NAME: {name}</h1>
                <h2>STATUS: {status}</h2>
                <h2>SPECIES: {species}</h2>
                <h2>GENDER: {gender}</h2>
            </div>
        </div>
    );
};

export default Personality;