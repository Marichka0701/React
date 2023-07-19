import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';

import styles from './CommentForm.module.css'
import {commentsService} from "../../services/axios.comments.service";

const CommentForm = () => {
    // перевірка на валідність
    const schema = Joi.object({
        name: Joi.string()
            .required()
            .messages({
                "string.empty": 'Поле \'name\' є обов\'язковим',
            }),
        email: Joi.string()
            .required()
            .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            .messages({
                "string.empty": 'Поле \'email\' є обов\'язковим',
                "string.pattern.base": 'Введіть валідний email'
            }),
        body: Joi.string()
            .required()
            .messages({
                "string.empty": 'Поле \'body\' є обов\'язковим',
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
        commentsService.create({...data, postId: 1});
        reset();
    }


    return (
        <div className={styles.wrapper}>
            <h2>ADD A NEW COMMENT</h2>
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
                        Email:
                        <input type="text" {...register('email')}  />
                    </label>
                    {errors.email && <span className={styles.error}> {errors.email.message} </span>}
                </div>

                <div className={styles.errorContainer}>
                    <label>
                    Body:
                    <input type="text" {...register('body')} />
                </label>
                    {errors.body && <span className={styles.error}> {errors.body.message} </span>}
                </div>

                <button
                    className={styles.addComment}
                    type="submit"
                    disabled={!isValid}
                >Add a new comment
                </button>
            </form>
        </div>
    );
};

export default CommentForm;