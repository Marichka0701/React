import React from 'react';

import styles from './Car.module.css'

const Car = ({car}) => {
    const { id, brand, price, year } = car;

    const handleClick = (e) => {
        e.preventDefault();

        try {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'DELETE'})
                .then(response=> console.log(response))
        }
        catch (e) {
            console.log(e.message);
        }
    }

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