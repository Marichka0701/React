import React from 'react';

import styles from './Car.module.css'
import {carsService} from "../../../services/axios.cars.service";

const Car = ({car}) => {
    const { id, brand, price, year } = car;

    const handleClick = () => {
        carsService.delete(id);
    };

    return (
        <div className={styles.car}>
            <div> <b>ID: </b> {id} </div>
            <div> <b>BRAND: </b> {brand} </div>
            <div> <b>PRICE: </b> {price} </div>
            <div> <b>YEAR: </b> {year} </div>
            <button className={styles.deleteCar} onClick={handleClick} > Delete a car </button>
        </div>
    );
};

export default Car;