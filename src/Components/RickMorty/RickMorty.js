import React from 'react';
import '../RickMorty/RickMorty.css';
import Personality from "../Personality/Personality";

const RickMorty = () => {
    const RickAndMorty = [
        {
            id: 14,
            name: 'Alien Morty',
            status: 'unknown',
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
        },
        {
            id: 243,
            name: 'Mr. Needful',
            status: 'Alive',
            species: "Humanoid",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/243.jpeg"
        },
        {
            id: 306,
            name: 'Scary Terry',
            status: 'Alive',
            species: "Mythological Creature",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/306.jpeg"
        },
        {
            id: 408,
            name: 'Quick Mystery Presenter',
            status: 'Alive',
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/408.jpeg"
        },
        {
            id: 615,
            name: 'Musical Fan',
            status: 'Alive',
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/615.jpeg"
        },
        {
            id: 745,
            name: 'Cenobite',
            status: 'unknown',
            species: "Mythological Creature",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/745.jpeg"
        },
    ]
    return (
        <div className='wrapper'>
            <Personality person={RickAndMorty[0]}/>
            <Personality person={RickAndMorty[1]}/>
            <Personality person={RickAndMorty[2]}/>
            <Personality person={RickAndMorty[3]}/>
            <Personality person={RickAndMorty[4]}/>
            <Personality person={RickAndMorty[5]}/>
        </div>
    );
};

export default RickMorty;