import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/axios.cars.service";

import Car from "./Car/Car";
import CarForm from "../CarForm/CarForm";

import styles from './Cars.module.css'

/* машинки з'являються знизу, бо там стилі 100vh 100vw */
const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [triggerForRender, setTriggerForRender] = useState(false);

    useEffect(() => {
        const getCars = async () => {
            try {
                await carsService.getAll()
                    .then(value => setCars(value.data));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getCars();
    }, [triggerForRender])

    return (
        <>
            <CarForm
                setTriggerForRender={setTriggerForRender}
                carForUpdate={carForUpdate}
            />
            <div className={styles.cars}>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        setCarForUpdate={setCarForUpdate}
                        setTriggerForRender={setTriggerForRender}
                    />)
                }
            </div>
        </>
    );
};

export default Cars;