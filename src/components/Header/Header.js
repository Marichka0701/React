import React from 'react';
import {NavLink} from "react-router-dom";

import '../../utils/reset.css';
import styles from './Header.module.css';
import {navLinks} from "../../constants/navLinks";

const Header = () => {
    return (
        <header className={styles.header}>
            {
                navLinks.map(navLink => <NavLink to={navLink.path} key={navLink.label}>
                    <p className={styles.label}>{navLink.label}</p>
                </NavLink>)
            }
        </header>
    );
};

export default Header;