import React from 'react';
import styles from './Navbar.module.css';
import {MainRoutes} from "../../routing/MainRoutes/MainRoutes";
import {Link, useLocation} from "react-router-dom";

const li = [
    {
        label: 'Main',
        route: MainRoutes.main,
    },
    {
        label: 'Albums',
        route: MainRoutes.albums,
    },
    {
        label: 'Comments',
        route: MainRoutes.comments,
    },
    {
        label: 'Todos',
        route: MainRoutes.todos,
    },
]

const Navbar = () => {
    const {pathname} = useLocation();

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    {
                        li.map((item, index) =>
                            <Link
                                key={index}
                                className={`${styles.list_item} ${pathname === item.route ? styles.active : ''}`}
                                to={item.route}
                            > {item.label} </Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;