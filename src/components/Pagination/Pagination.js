import React from 'react';
import {Button} from "@mui/material";

import styles from './Pagination.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RMActions, setCurrentPage} from "../../redux/slices/RM.slice";

const Pagination = () => {
    const {currentPage, countPagesEpisodes} = useSelector((state) => state.RM);
    const dispatch = useDispatch();

    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    const next = async () => {
        await dispatch(RMActions.getAllEpisodes({page: nextPage}));
        dispatch(setCurrentPage(nextPage));
    }

    const prev = async () => {
        await dispatch(RMActions.getAllEpisodes({page: prevPage}));
        dispatch(setCurrentPage(prevPage));
    }

    return (
        <div className={styles.pagination}>
            <Button
                onClick={prev}
                disabled={currentPage <= 1}
                variant={currentPage === 1 ? "outlined" : "contained" }
            >Prev</Button>
            <Button
                onClick={next}
                disabled={currentPage >= countPagesEpisodes}
                variant={currentPage === countPagesEpisodes ? "outlined" : "contained" }
            >Next</Button>
        </div>
    );
};

export default Pagination;