import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {RMService} from "../../services/RM.service";

const initialState = {
    episodes: [],
    currentPage: null,
    countPagesEpisodes: null,
    selectedCharacters: [],
    episodeTitle: null,
}

const getAllEpisodes = createAsyncThunk(
    'RMSlice/getCharacters',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await RMService.getAllEpisodes(page);
            thunkAPI.dispatch(setCountPagesEpisodes(data.info.pages))
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
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setEpisodes: (state, action) => {
            state.episodes = action.payload
        },
        setCountPagesEpisodes: (state, action) => {
            state.countPagesEpisodes = action.payload;
        },
        setEpisodeTitle: (state, action) => {
            state.episodeTitle = action.payload;
        },
        setSelectedCharacters: (state, action) => {
            state.selectedCharacters = action.payload;
        }
    },
    extraReducers: builder =>  {
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload;
            })
    }
});

const RMActions = {
    getAllEpisodes,
}

const {reducer:RMReducer,
    actions: {
        setCurrentPage,
        setEpisodes,
        setCountPagesEpisodes,
        setEpisodeTitle,
        setSelectedCharacters,
    }} = RMSlice;

export {
    RMReducer,
    setCurrentPage,
    setEpisodes,
    setCountPagesEpisodes,
    setEpisodeTitle,
    setSelectedCharacters,
    RMActions,
}
