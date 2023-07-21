import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/axios.comments.service";
import Comment from "./Comment/Comment";
import styles from './CommentsPage.module.css'

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll()
            .then(value => setComments(value.data))
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Comments list </h1>
            <div className={styles.comments}>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment} />)
                }
            </div>
        </div>
    );
};

export default CommentsPage;