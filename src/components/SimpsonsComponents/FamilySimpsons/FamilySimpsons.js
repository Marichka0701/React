import React from 'react';
import Simpson from "../Simpson/Simpson.js";
import "../FamilySimpsons/familySimpsons.css";

const FamilySimpsons = () => {
    const simpsons = [
        {
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            gender: 'male',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            gender: 'male',
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            gender: 'female',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            gender: 'female',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            gender: 'female',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];
    return (
        <div className='family_simpsons'>
            <Simpson simpson={simpsons[0]}/>
            <Simpson simpson={simpsons[1]}/>
            <Simpson simpson={simpsons[2]}/>
            <Simpson simpson={simpsons[3]}/>
            <Simpson simpson={simpsons[4]}/>
        </div>
    );
};

export default FamilySimpsons;