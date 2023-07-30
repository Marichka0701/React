import React from "react";
import styles from './Comment.module.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);

        const {comment} = props;
        this.state = {
            comment: comment,
        }
    }

    render() {
        const { comment } = this.state;
        const {postId, id, name, email, body} = comment;

        return (
            <div className={styles.comment}>
                <div> <b>USER_ID: </b> {postId} </div>
                <div> <b>ID: </b> {id} </div>
                <div> <b>TITLE: </b> {name} </div>
                <div> <b>TITLE: </b> {email} </div>
                <div> <b>BODY: </b> {body} </div>
            </div>
        )
    }
}

export default Comment;