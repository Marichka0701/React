import React from 'react';
import styles from "./Album.module.css";

const Album = ({album}) => {
    const { id, userId, title } = album;

    return (
        <div className={styles.album}>
            <div className={styles.album_block}><b>id:</b> {id} </div>
            <div className={styles.album_block}><b>userId:</b> {userId} </div>
            <div className={styles.album_block}><b>title:</b> {title} </div>
        </div>
    );
};

export default Album;