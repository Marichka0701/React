import React from 'react';

import styles from './Car.module.css'

const Car = ({car}) => {
    const { id, brand, price, year } = car;

    return (
        <div className={styles.car}>
            <div> <b>ID: </b> {id} </div>
            <div> <b>BRAND: </b> {brand} </div>
            <div> <b>PRICE: </b> {price} </div>
            <div> <b>YEAR: </b> {year} </div>
        </div>
    );
};

export default Car;