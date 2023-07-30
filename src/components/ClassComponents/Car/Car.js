import React from "react";
import styles from './Car.module.css';

class Car extends React.Component {
    constructor(props) {
        super(props);
        const {car} = props;
        this.state = {
            car: car,
        }
    }

    render() {
        const {car} = this.state;
        const {id, brand, price, year} = car;

        return (
            <div className={styles.car}>
                <div> id: {id} </div>
                <div> brand: {brand} </div>
                <div> price: {price} </div>
                <div> year: {year} </div>
            </div>
        )
    }
}

export default Car;