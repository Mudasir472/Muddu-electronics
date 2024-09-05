import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const teamFetch = createAsyncThunk(
    "teamProducts/teamFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/teamdata");
        return response.data;
    }
);

const teamSlice = createSlice({
    name: "teamProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(teamFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(teamFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(teamFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default teamSlice.reducer;