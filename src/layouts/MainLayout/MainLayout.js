import React from 'react';
import styles from './MainLayout.module.css'
import Navbar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;