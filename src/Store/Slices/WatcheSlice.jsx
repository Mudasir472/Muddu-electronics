import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const watchFetch = createAsyncThunk(
    "watchProducts/watchFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/watchdata");
        return response.data;
    }
);

const watchSlice = createSlice({
    name: "watchProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(watchFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(watchFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(watchFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default watchSlice.reducer;