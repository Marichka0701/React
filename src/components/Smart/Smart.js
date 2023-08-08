import React from 'react';
import {useDispatch} from "react-redux";
import {userAction} from "../../redux/actions/usersAction";

const Smart = () => {
    const users = [
        {id: 1, name: 'olya', age: 35},
        {id: 2, name: 'max', age: 18},
        {id: 3, name: 'tioma', age: 21},
        {id: 4, name: 'katya', age: 19},
        {id: 5, name: 'oleg', age: 22},
        {id: 6, name: 'igor', age: 36},
        {id: 7, name: 'yulia', age: 17},
    ]

    const dispatch = useDispatch();

    dispatch(userAction.SET_USERS(users));

    return (
        <div>
            <h1>hello from smart component</h1>
        </div>
    );
};

export default Smart;