import { configureStore } from "@reduxjs/toolkit";
import bannerReducre from './bannerDataSlice'
const store = configureStore({
    reducer: {
        bannerData: bannerReducre
    }
})

export default store;