import React from 'react';

const Post = ({post}) => {
    const {id, body, title} = post;

    return (
        <div style={{maxWidth: 500}}>
            <div> <b>ID: </b> {id} </div>
            <div> <b>TITLE: </b> {title} </div>
            <div> <b>BODY: </b> {body} </div>
        </div>
    )};

export default Post;