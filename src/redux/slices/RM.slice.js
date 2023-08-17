import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {RMService} from "../../services/RM.service";

const initialState = {
    episodes: [],
    currentPage: null,
    nextPage: null,
}

const getAllEpisodes = createAsyncThunk(
    'RMSlice/getCharacters',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await RMService.getAllEpisodes(page);
            const nextPage = data.info.next;
            thunkAPI.dispatch(setNextPage(nextPage))
            return data.results;
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const RMSlice = createSlice({
    name: 'RMSlice',
    initialState,
    reducers: {
        setNextPage: (state, action) => {
            state.nextPage = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder =>  {
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload;
            })}
});

const RMActions = {
    getAllEpisodes,
}

const {reducer:RMReducer, actions: {setNextPage, setCurrentPage}} = RMSlice;

export {
    RMReducer,
    setNextPage,
    setCurrentPage,
    RMActions,
}
