import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/axios.cars.service";

import Car from "./Car/Car";
import CarForm from "../CarForm/CarForm";

import styles from './Cars.module.css'

/* машинки з'являються знизу, бо там стилі 100vh 100vw */
const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [triggerForUpdate, setTriggerForUpdate] = useState([]);

    useEffect(()=> {
        carsService.getAll()
            .then(value => value.data)
            .then(data => setCars(data))
    }, [triggerForUpdate])

    return (
        <>
            <CarForm setTriggerForUpdate={setTriggerForUpdate} carForUpdate={carForUpdate} />
            <div className={styles.cars}>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        setCarForUpdate={setCarForUpdate}
                        setTriggerForUpdate={setTriggerForUpdate}
                    />)
                }
            </div>
        </>
    );
};

export default Cars;