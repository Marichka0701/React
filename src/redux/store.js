import {configureStore} from "@reduxjs/toolkit";
import {RMReducer} from "./slices/RM.slice";

const store = configureStore({
    reducer: {
        RM: RMReducer,
    }
})

export {
    store,
}