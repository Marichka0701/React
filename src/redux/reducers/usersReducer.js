import {userActionTypes} from "../actions/usersAction";

const initialState = {
    users: [{id: 1, name: 'marichka', age: 18}],
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case userActionTypes.DELETE_USER_BY_ID:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}