import React, {useEffect, useState} from 'react';

import styles from './Character.module.scss';
import {RMService} from "../../../services/RM.service";

const Character = ({character}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        RMService.getCharacter(character)
            .then(res => setData(res));
    }, [])

    return (
        <div className={styles.character}>
            <div className={styles.image}>
                <img src={data?.image} alt={data?.name} />
            </div>

            <div className={styles.info}>
                <h2>Name: {data?.name}</h2>
                <h2>Species: {data?.species}</h2>
                <h2>Status: {data?.status}</h2>
            </div>
        </div>
    );
};

export default Character;