import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import topStories from "../../api/topStories";
import { API_KEY } from "../../api/api_key";

const FASHION_END_POINT = "/fashion.json?api-key=";
export const loadFashionTopStories = createAsyncThunk(
  "fashion/fashionTopStories",
  async () => {
    try {
      const response = await topStories.get(`${FASHION_END_POINT}${API_KEY}`);
      const data = await response.data;
      return data;
    } catch (err) {
      console.log("ERROR FASHION API...", err.message);
    }
  }
);

const initialState = {
  fetchFashionData: [],
  isLoading: false,
  hasError: false,
};
const fashionTopStoriesSlice = createSlice({
  name: "fashion",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadFashionTopStories.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadFashionTopStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.fetchFashionData = action.payload;
      })
      .addCase(loadFashionTopStories.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectFashionData = (state) => state.fashion.fetchFashionData;
export const selectIsLoading = (state) => state.fashion.isLoading;

export default fashionTopStoriesSlice.reducer;
