import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import Users from "../Users/Users";
import Comments from "../Comments/Comments";
import Posts from "../Posts/Posts";

const UseFetch = () => {
    const users = useFetch('/users');
    const comments = useFetch('/comments');
    const posts = useFetch('/posts');

    return (
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div>
                {users && <Users users={users}/>}
            </div>
            <div>
                {comments && <Comments comments={comments}/>}
            </div>
            <div>
                {posts && <Posts posts={posts}/>}
            </div>
        </div>
    );
};

export default UseFetch;