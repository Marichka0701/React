import {combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {usersReducer} from "../reducers/usersReducer";

const rootReducer = combineReducers({
    usersReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
})

export const store = createStore(rootReducer, composeEnhancers());