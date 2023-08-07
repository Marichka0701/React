import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email} = comment;

    return (
        <div style={{maxWidth: 300}}>
            <p>PostId: {postId}</p>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Comment;