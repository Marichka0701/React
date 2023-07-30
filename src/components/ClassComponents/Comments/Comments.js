import React from "react";
import styles from './Comments.module.css';
import Comment from "../Comment/Comment";
class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        const { comments } = this.state;

        return (
            <div className={styles.comments}>
                {
                   comments.map(comment => <Comment key={comment.id} comment={comment} />)
                }
            </div>
        )
    }
}

export default Comments;