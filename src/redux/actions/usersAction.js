const userActionTypes = {
    SET_USERS: 'SET_USERS',
    GET_USER_BY_ID: 'GET_USER_BY_ID',
    DELETE_USER_BY_ID: 'DELETE_USER_BY_ID',
}

const userAction = {
    SET_USERS: (users) => ({type: userActionTypes.SET_USERS, payload: users}),
    GET_USER_BY_ID: (id) => ({type: userActionTypes.GET_USER_BY_ID, payload: id}),
    DELETE_USER_BY_ID: (id) => ({type: userActionTypes.DELETE_USER_BY_ID, payload: id}),
}

export {
    userActionTypes,
    userAction,
}

