import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import topStories from "../../api/topStories";
import { API_KEY } from "../../api/api_key";

const HOME_END_POINT = "home.json?api-key=";
export const loadHomeTopStories = createAsyncThunk(
  "home/topStories",
  async () => {
    try {
      const response = await topStories.get(`${HOME_END_POINT}${API_KEY}`);
      const data = await response.data
      return data
    } catch (err) {
      console.log("Result...", err.message);
    }
  }
);
const initialState = {
  fetchData: [],
  isLoading: false,
  hasError: false,
};
const homeTopStoriesSlice = createSlice({
  name: "home",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadHomeTopStories.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadHomeTopStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fetchData = action.payload;
      })
      .addCase(loadHomeTopStories.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.fetchData = [];
      });
  },
});

export const selectFetchData = (state) => state.home.fetchData;
export const selectIsLoading = (state) => state.home.isLoading;
export default homeTopStoriesSlice.reducer;
