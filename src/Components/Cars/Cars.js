import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "./Car/Car";
import CarForm from "../CarForm/CarForm";

import styles from './Cars.module.css'
import {carThunks} from "../../redux/actions/carsActions";

/* машинки з'являються знизу, бо там стилі 100vh 100vw */
const Cars = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCars = async () => {
            try {
                dispatch(carThunks.get());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getCars();
    }, []);

    const cars = useSelector((store) => store.carsReducer.cars);

    return (
        <>
            <CarForm />
            <div className={styles.cars}>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                    />)
                }
            </div>
        </>
    );
};

export default Cars;