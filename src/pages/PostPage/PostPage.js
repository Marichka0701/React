import React, {useEffect, useState} from 'react';
import styles from './PostPage.module.css';
import {postsService} from "../../services/axios.posts.service";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        postsService.getById(id)
            .then(value => setPost(value.data))
    }, [id])

    return (
        <div className={styles.container}>
            <h1>Post {id}</h1>
            {post ? (
                <div className={styles.post}>
                    <div> <b>userId:</b> {post.userId}</div>
                    <div> <b>title:</b> {post.title}</div>
                    <div> <b>body:</b> {post.body}</div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PostPage;