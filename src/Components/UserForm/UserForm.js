import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';

import styles from './UserForm.module.css'
import {usersService} from "../../services/axios.users.service";

const UserForm = () => {
    // перевірка на валідність
    const schema = Joi.object({
        name: Joi.string()
            .required()
            .messages({
                "string.empty": 'Поле \'name\' є обов\'язковим',
            }),
        username: Joi.string()
            .required()
            .messages({
                "string.empty": 'Поле \'username\' є обов\'язковим',
            }),
        email: Joi.string()
            .required()
            .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            .messages({
                "string.empty": 'Поле \'email\' є обов\'язковим',
                "string.pattern.base": 'Введіть валідний email'
            }),

    })

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm({
        resolver: joiResolver(schema),
        mode: 'all'
    });


    const onSubmit = (data) => {
        usersService.create(data);
        reset();
    }

    return (
        <div className={styles.wrapper}>
            <h2>ADD A NEW USER</h2>
            <form action='#' onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.errorContainer}>
                    <label>
                        Name:
                        <input type="text" {...register('name')} />
                    </label>
                    {errors.name && <span className={styles.error}> {errors.name.message} </span>}
                </div>

                <div className={styles.errorContainer}>
                    <label>
                        Username:
                        <input type="text" {...register('username')} />
                    </label>
                    {errors.username && <span className={styles.error}> {errors.username.message} </span>}
                </div>

                <div className={styles.errorContainer}>
                    <label>
                        Email:
                        <input type="email" {...register('email')} />
                    </label>
                    {errors.email && <span className={styles.error}> {errors.email.message} </span>}
                </div>

                <button
                    className={styles.addUser}
                    type="submit"
                    disabled={!isValid}
                >Add new user
                </button>
            </form>
        </div>
    );
};

export default UserForm;