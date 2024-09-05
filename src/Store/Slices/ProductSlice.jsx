import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const productsFetch = createAsyncThunk(
    "product/productsFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/collections");
        return response.data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;