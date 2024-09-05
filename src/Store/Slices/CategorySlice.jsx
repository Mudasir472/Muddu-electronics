import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null
};

export const fetchCata = createAsyncThunk(
    "cata/fetchCata",
    async (category) => {
        const response = await axios.get(`http://localhost:8090/${category}data`); // API endpoint dynamically based on category
        return response.data;
    }
);

const cataSlice = createSlice({
    name: "cata",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCata.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchCata.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(fetchCata.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default cataSlice.reducer;
