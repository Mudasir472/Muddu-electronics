import { configureStore } from "@reduxjs/toolkit";
import ProductSlice, { productsFetch } from "./Slices/ProductSlice";
import CameraSlice, { cameraFetch } from "./Slices/CameraSlice";
import ComputerSlice, { computerFetch } from "./Slices/ComputerSlice";
import WatcheSlice, { watchFetch } from "./Slices/WatcheSlice";
import MobileSlice, { mobileFetch } from "./Slices/MobileSlice";
import KeyboardSlice, { keyboardFetch } from "./Slices/KeyboardSlice";
import BlogSlice, { blogFetch } from "./Slices/BlogSlice";
import TeamSlice, { teamFetch } from "./Slices/TeamSlice";
import CartSlice, { getTotal } from "./Slices/CartSlice";

import cataSlice, { fetchCata } from "./Slices/CategorySlice";


const store = configureStore({
    reducer: {
        product: ProductSlice,
        cameraProducts: CameraSlice,
        computerProducts: ComputerSlice,
        watchProducts: WatcheSlice,
        mobileProducts: MobileSlice,
        keyboardProducts: KeyboardSlice,
        blogProducts: BlogSlice,
        teamProducts:TeamSlice,

        cart:CartSlice,
        // cata:cataSlice,
    }
});
store.dispatch(getTotal())
store.dispatch(productsFetch());
store.dispatch(cameraFetch());
store.dispatch(computerFetch());
store.dispatch(watchFetch());
store.dispatch(mobileFetch());
store.dispatch(keyboardFetch());
store.dispatch(blogFetch());
store.dispatch(teamFetch());

// store.dispatch(fetchCata());
export default store;