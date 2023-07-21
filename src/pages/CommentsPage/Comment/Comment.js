import React from 'react';
import styles from './Comment.module.css'
import {postsService} from "../../../services/axios.posts.service";
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    const handleClick = () => {
        postsService.getById(postId)
            .then(value => {
                console.log(value.data);
                navigate(`/post/${postId}`)
            })
    }

    return (
        <div className={styles.comment} onClick={handleClick}>
            <div className={styles.comment_block}> <b>id</b>: {id} </div>
            <div className={styles.comment_block}> <b>postId</b>: {postId} </div>
            <div className={styles.comment_block}> <b>name</b>: {name} </div>
            <div className={styles.comment_block}> <b>email</b>: {email} </div>
            <div className={styles.comment_block}> <b>body</b>: {body} </div>
        </div>
    );
};

export default Comment;