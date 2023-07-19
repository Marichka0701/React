import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/axios.cars.service";
import Car from "./Car/Car";

import styles from './Cars.module.css'


const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=> {
        carsService.getAll()
            .then(value => value.data)
            .then(data => setCars(data))
    }, [])

    return (
        <div className={styles.cars}>
            {
                cars.map(car => <Car key={car.id} car={car} />)
            }
        </div>
    );
};

export default Cars;