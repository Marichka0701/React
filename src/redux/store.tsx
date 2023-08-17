import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import thunk from 'redux-thunk'
import {carsReducer} from "./reducers/carsReducer";

const rootReducer = combineReducers({
    carsReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))