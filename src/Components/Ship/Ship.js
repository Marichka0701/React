import React from 'react';
import '../general.css';
import styles from './ship.module.css';

const Ship = (props) => {
    const { ship } = props;

    return (
        <div className={styles.ship_container}>
            <h1> {ship.mission_name} {ship.launch_year} </h1>
            <img src={ship.links.mission_patch_small} alt={ship.mission_name} />
        </div>
    );
};

export default Ship;