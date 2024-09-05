import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
};

export const cameraFetch = createAsyncThunk(
    "cameraProducts/cameraFetch",
    async () => {
        const response = await axios.get("http://localhost:8090/cameradata");
        return response.data;
    }
);

const cameraSlice = createSlice({
    name: "cameraProducts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(cameraFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(cameraFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(cameraFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default cameraSlice.reducer;