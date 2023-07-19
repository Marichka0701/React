import React  from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators/car.validator";
import {carsService} from "../../services/axios.cars.service";
import styles from './CarForm.module.css'

const CarForm = ({carForUpdate, setTriggerForUpdate}) => {

    const {register, handleSubmit, formState: {errors, isValid}, reset, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all',
    });

    const onSubmit = (data) => {
        carsService.create(data);
        setTriggerForUpdate(prev => !prev)
        reset();
    }

    const handleUpdate = () => {
        setValue('brand', 'fdsdsf', { shouldValidate: true })
        console.log('update ffdjsfj')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.createCar}>
                <h2>ADD A NEW CAR</h2>
                <form action='#' onSubmit={handleSubmit(carForUpdate ? handleUpdate : onSubmit)}>

                    <div className={styles.errorContainer}>
                        <label>
                            Brand:
                            <input type="text" {...register('brand')} />
                        </label>
                        {errors.brand && <span className={styles.error}> {errors.brand.message} </span>}
                    </div>

                    <div className={styles.errorContainer}>
                        <label>
                            Price:
                            <input type="number" {...register('price')} />
                        </label>
                        {errors.price && <span className={styles.error}> {errors.price.message} </span>}
                    </div>

                    <div className={styles.errorContainer}>
                        <label>
                            Year:
                            <input type="number" {...register('year')} />
                        </label>
                        {errors.year && <span className={styles.error}> {errors.year.message} </span>}
                    </div>


                    <div className={styles.buttons}>
                        <button
                            className={styles.btn}
                            type="submit"
                            disabled={!isValid}
                        >{carForUpdate ? 'Update' : 'Add a new car'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarForm;