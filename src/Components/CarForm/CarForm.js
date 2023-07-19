import React from 'react';
import {useForm} from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import styles from './CarForm.module.css'
import {carsService} from "../../services/axios.cars.service";

const CarForm = () => {
    const schema = Joi.object({
        brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}/).min(1).max(20).messages({
            'string.empty': 'Поле \'brand\' є обов\'язковим',
            'string.pattern.base': 'Невалідний brand',
            'string.max': 'Максимальна довжина 20 символів',
            'string.min': 'Мінімальна довжина 1 символ',
        }),
        price: Joi.number().required().min(0).max(1000000).messages({
            'string.empty': 'Поле \'price\' є обов\'язковим',
            'string.max': 'Максимальна ціна 1000000$',
            'string.min': 'Мінімальна ціна 0$',
        }),
        year: Joi.number().required().min(1990).max(new Date().getFullYear()).messages({
            'string.empty': 'Поле \'year\' є обов\'язковим',
            'string.max': `Максимальний рік ${new Date().getFullYear()}`,
            'string.min': 'Мінімальний рік 1990',
        }),
    })

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset
    } = useForm({
        resolver: joiResolver(schema),
        mode: 'all',
    });

    console.log(errors);
    const onSubmit = (data) => {
        carsService.create(data);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.createCar}>
                <h2>ADD A NEW CAR</h2>
                <form action='#' onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Brand:
                        <input type="text" {...register('brand')} />
                    </label>
                    <label>
                        Price:
                        <input type="number" {...register('price')} />
                    </label>
                    <label>
                        Year:
                        <input type="number" {...register('year')} />
                    </label>

                    <div className={styles.buttons}>
                        <button
                            className={styles.btn}
                            type="submit"
                            disabled={!isValid}
                        >Add a new car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarForm;