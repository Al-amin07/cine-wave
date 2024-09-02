import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData: [],
    nowPlaying: [],
    imageUrl: ''
}

const bannerSlice = createSlice({
    name :'movie',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setImageUrl: (state, action) => {
            state.imageUrl = action.payload
        },
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload
        }
    }
})

export default bannerSlice.reducer;
export const { setBannerData, setImageUrl, setNowPlaying } = bannerSlice.actions