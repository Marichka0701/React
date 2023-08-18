import React from 'react';

import styles from './Header.module.scss';
import {useSelector} from "react-redux";

const Header = () => {
    const {episodeTitle} = useSelector((state) => state.RM);

    return (
        <header className={styles.header}>
            {
                episodeTitle ? episodeTitle : 'RICK AND MORTY'
            }
        </header>
    );
};

export default Header;