import React, {useEffect, useState} from 'react';
import '../general.css';
import styles from './ships.module.css';
import Ship from "../Ship/Ship";

const Ships = () => {
    const [allShips, setAllShips] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(ships => {
                setAllShips(ships.filter(ship => ship.launch_year !== '2020'))
            });
    }, [])


    return (
        <div className={styles.wrapper}>
            {
                allShips.map(ship => <Ship key={ship.flight_number} ship={ship} />)
            }
        </div>
    );
};

export default Ships;