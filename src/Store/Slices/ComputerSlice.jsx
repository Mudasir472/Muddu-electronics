import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const computerFetch = createAsyncThunk(
    "computerProducts/computerFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/computerdata");
        return response.data;
    }
);

const computerSlice = createSlice({
    name: "computerProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(computerFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(computerFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(computerFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default computerSlice.reducer;