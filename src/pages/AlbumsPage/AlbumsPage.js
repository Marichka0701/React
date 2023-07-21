import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/axios.albums.service";
import Album from "./Album/Album";
import styles from './AlbumsPage.module.css'

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll()
            .then(value => setAlbums(value.data))
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Albums list</h1>
            <div className={styles.albums}>
                {
                    albums.map(album => <Album key={album.id} album={album} />)
                }
            </div>
        </div>
    );
};

export default AlbumsPage;