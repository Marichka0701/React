import React from "react";
import Post from "../Post/Post";
import styles from './Posts.module.css';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
        // this.state = [];
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        const { posts } = this.state;
        console.log(posts)
        return (
            <div className={styles.posts}>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        )
    }
}

export default Posts;