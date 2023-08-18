import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RMActions, setCurrentPage} from "../../redux/slices/RM.slice";
import Episode from "./Episode/Episode";
import styles from './Episodes.module.scss';
import Pagination from "../Pagination/Pagination";

const Episodes = () => {
    const dispatch = useDispatch();
    const episodes = useSelector((state) => state.RM.episodes);

    useEffect(() => {
        const fetchData = async () => {
            const page = 1;
            await dispatch(setCurrentPage(page));
            await dispatch(RMActions.getAllEpisodes({page}));
        }
        fetchData();
    }, []);

    return (
        <div className={styles.episodes_wrapper}>
            <div className={styles.episodes}>
                {
                    episodes.map(item => <Episode key={item.id} item={item}/>)
                }
            </div>
            <Pagination/>
        </div>
    );
};

export default Episodes;