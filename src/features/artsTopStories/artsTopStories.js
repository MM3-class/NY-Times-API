import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import topStories from "../../api/topStories";
import { API_KEY } from "../../api/api_key";

const ARTS_END_POINT = "arts.json?api-key="
export const loadArtsTopStories = createAsyncThunk(
  "arts/topStory",
  async () => {
    try {
      const response = await topStories.get(`${ARTS_END_POINT}${API_KEY}`);
      const data = await response.data;
      return data
    } catch (err) {
      console.log("Art's Top story ERROR...", err.message);
    }
  }
);

const initialState = {
  fetchData: [],
  isLoading: false,
  hasError: false,
};

const artsTopStoriesSlice = createSlice({
  name: "arts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadArtsTopStories.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadArtsTopStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.fetchData = action.payload;
      })
      .addCase(loadArtsTopStories.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
export const selectArts = (state) => state.arts.fetchData;
export const selectIsLoading = (state) => state.arts.isLoading;

export default artsTopStoriesSlice.reducer;
