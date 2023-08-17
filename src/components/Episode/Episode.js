import React from 'react';

import styles from './Episode.module.scss';

const Episode = ({item}) => {
    const {name, episode, air_date} = item;

    return (
        <div className={styles.episode}>
            <div> <b>Name:</b> {name}</div>
            <div> <b>Episode:</b> {episode}</div>
            <div> <b>Air date:</b> {air_date}</div>
        </div>
    );
};

export default Episode;