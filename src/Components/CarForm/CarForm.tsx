import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators/car.validator";
import styles from './CarForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {carThunks} from "../../redux/actions/carsActions";

const CarForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
        setValue
    } = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all',
    });

    const carForUpdate = useSelector((store) => store.carsReducer.carForUpdate);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(carThunks.create(data));
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate?.brand, {shouldValidate: true});
            setValue('price', carForUpdate?.price, {shouldValidate: true});
            setValue('year', carForUpdate?.year, {shouldValidate: true});
        }
    }, [carForUpdate])

    const handleUpdate = async (data) => {
        dispatch(carThunks.update(carForUpdate.id, {
            brand: data.brand,
            price: data.price,
            year: data.year,
        }))
        reset();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.createCar}>
                <h2>ADD A NEW CAR</h2>
                <form action='#' onSubmit={carForUpdate ? handleSubmit(handleUpdate) : handleSubmit(onSubmit)}>

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