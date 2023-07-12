import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../../App";

const SubchildTwoTwo = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users?id=1')
            .then(response => response.json())
            .then(data => {
                setUser(data[0]);
            })
    }, []);

    return (
        <div>
            It is <b>Subchild_2_2</b>
        </div>
    );
};

export default SubchildTwoTwo;