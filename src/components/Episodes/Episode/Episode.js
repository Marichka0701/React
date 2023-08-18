import React from 'react';

import styles from './Episode.module.scss';
import {useDispatch} from "react-redux";
import {setEpisodeTitle, setSelectedCharacters} from "../../../redux/slices/RM.slice";
import {useNavigate} from "react-router-dom";

const Episode = ({item}) => {
    const {name, episode, air_date} = item;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSelect = async () => {
        await dispatch(setSelectedCharacters(item.characters));
        await dispatch(setEpisodeTitle(name));
        navigate('/characters');
    };

    return (
        <div onClick={handleSelect} className={styles.episode}>
            <div> <b>Name:</b> {name}</div>
            <div> <b>Episode:</b> {episode}</div>
            <div> <b>Air date:</b> {air_date}</div>
        </div>
    );
};

export default Episode;