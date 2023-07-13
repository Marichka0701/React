import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import styles from './Cars.module.css'

import Car from "./Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=> {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(res=>res.json())
            .then(data=> setCars(data))
    }, [cars]);

    return (
        <div>
            <Link to='/'>
                <h2 className={styles.title}> Prev page </h2>
            </Link>
            <div className={styles.cars}>
                {
                    cars.map(car=> <Car key={car.id} car={car} />)
                }
            </div>
        </div>
    );
};

export default Cars;