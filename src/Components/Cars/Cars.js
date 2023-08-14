import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "./Car/Car";
import CarForm from "../CarForm/CarForm";

import styles from './Cars.module.css'
import {carThunks} from "../../redux/actions/carsActions";

/* машинки з'являються знизу, бо там стилі 100vh 100vw */
const Cars = () => {
    const [triggerForRender, setTriggerForRender] = useState(false);

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
    }, [triggerForRender]);

    const cars = useSelector((store) => store.carsReducer.cars);

    return (
        <>
            <CarForm
                setTriggerForRender={setTriggerForRender}
            />
            <div className={styles.cars}>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        setTriggerForRender={setTriggerForRender}
                    />)
                }
            </div>
        </>
    );
};

export default Cars;