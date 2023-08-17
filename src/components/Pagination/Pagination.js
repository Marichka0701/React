import React from 'react';
import {Button} from "@mui/material";

import styles from './Pagination.module.scss';
import {useSelector} from "react-redux";

const Pagination = () => {
    const currentPage = useSelector((state) => state.RM.currentPage);
    console.log(currentPage)

    const next = () => {

    }

    const prev = () => {

    }

    return (
        <div className={styles.pagination}>
            <Button variant=`${current}`>Prev</Button>
            <Button variant="outlined">Next</Button>
        </div>
    );
};

export default Pagination;