import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux/actions/usersAction";

const Users = () => {
    const users = useSelector((store) => store.usersReducer.users);
    const dispatch = useDispatch();

    const handleUserDelete = (id) => {
        dispatch(userAction.DELETE_USER_BY_ID(id));
    }

    return (
        <div>
            <h1>all users</h1>
            <div>
                {users.map(user =>
                    <div key={user.id}>
                        <h3>id: {user.id}</h3>
                        <h3>name: {user.name}, age: {user.age}</h3>
                        <div>
                            <button onClick={() => handleUserDelete(user.id)}>delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;