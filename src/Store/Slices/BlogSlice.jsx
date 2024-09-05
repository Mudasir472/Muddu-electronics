import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const blogFetch = createAsyncThunk(
    "blogProducts/blogFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/blogdata");
        return response.data;
    }
);

const blogSlice = createSlice({
    name: "blogProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(blogFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(blogFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(blogFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default blogSlice.reducer;