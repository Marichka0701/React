import React from "react";
import styles from './Cars.module.css';
import Car from "../Car/Car";

class Cars extends React.Component {
    constructor() {
        super();
        this.state = {
            cars: [],
        }
    }

    componentDidMount() {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => response.json())
            .then(cars => this.setState({cars}))
    }

    render() {
        const {cars} = this.state;

        return (
            <div className={styles.cars}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        )
    }
}

export default Cars;