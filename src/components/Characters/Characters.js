import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import styles from './Characters.module.scss';
import Character from "./Character/Character";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {setEpisodeTitle} from "../../redux/slices/RM.slice";

const Characters = () => {
    const {selectedCharacters} = useSelector((state) => state.RM);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
        dispatch(setEpisodeTitle(null));
    }

    return (
        <div className={styles.characters_wrapper}>
            <Button
                variant="contained"
                onClick={handleBack}
            >Back</Button>
            <div className={styles.characters}>
                {
                    selectedCharacters.map((item, index) => <Character key={index} character={item}/>)
                }
            </div>
        </div>
    );
};

export default Characters;