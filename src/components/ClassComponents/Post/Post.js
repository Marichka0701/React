import React from "react";
import styles from './Post.module.css';
class Post extends React.Component {
    constructor(props) {
        super(props);
        const { post } = props;
        this.state = {
            post: {
                id: post.id,
                body: post.body,
                title: post.title,
            }
        }
        // const { id, body, title } = post;
    }

    render() {
        const { post } = this.state;

        return (
            <div className={styles.post}>
                <div> <b>ID: </b> {post.id} </div>
                <div> <b>TITLE: </b> {post.title} </div>
                <div> <b>BODY: </b> {post.body} </div>
            </div>
        )
    }
}

export default Post;