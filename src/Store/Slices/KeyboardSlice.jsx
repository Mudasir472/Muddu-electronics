import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const keyboardFetch = createAsyncThunk(
    "keyboardProducts/keyboardFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/keyboarddata");
        return response.data;
    }
);

const keyboardSlice = createSlice({
    name: "keyboardProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(keyboardFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(keyboardFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(keyboardFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default keyboardSlice.reducer;