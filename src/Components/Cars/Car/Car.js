import React from 'react';

import styles from './Car.module.css'
import {carsService} from "../../../services/axios.cars.service";

const Car = ({car, setCarForUpdate, setTriggerForUpdate}) => {
    const { id, brand, price, year } = car;

    const handleDeleteClick = () => {
        carsService.delete(id);
        // setTriggerForUpdate(prev => !prev);
    };

    const handleUpdateClick = () => {
        // carsService.updateById(id)
        setCarForUpdate(car);
    };

    return (
        <div className={styles.car}>
            <div> <b>ID: </b> {id} </div>
            <div> <b>BRAND: </b> {brand} </div>
            <div> <b>PRICE: </b> {price} </div>
            <div> <b>YEAR: </b> {year} </div>
            <button className={styles.deleteCar} onClick={handleDeleteClick} > Delete </button>
            <button className={styles.deleteCar} onClick={handleUpdateClick} > Update </button>
        </div>
    );
};

export default Car;