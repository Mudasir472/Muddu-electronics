import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const mobileFetch = createAsyncThunk(
    "mobileProducts/mobileFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/mobilesdata");
        return response.data;
    }
);

const mobileSlice = createSlice({
    name: "mobileProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(mobileFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(mobileFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(mobileFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default mobileSlice.reducer;