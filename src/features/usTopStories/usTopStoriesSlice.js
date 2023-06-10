import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import topStories from "../../api/topStories";
import { API_KEY } from "../../api/api_key";

const US_END_POINT = "us.json?api-key=";
export const loadUsData = createAsyncThunk("topStories/us", async () => {
  try {
    const response = await topStories.get(`${US_END_POINT}${API_KEY}`);
    const data = await response.data;
    console.log("US...", data);
    return data;
  } catch (err) {
    console.log("US_ERROR", err.message);
  }
});
const initialState = {
  fetchUsData: [],
  isLoading: false,
  hasError: false,
};
const usTopStoriesSlice = createSlice({
  name: "us",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadUsData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadUsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.fetchUsData = action.payload;
      })
      .addCase(loadUsData.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectUsData = (state) => state.us.fetchUsData;
export const selectUsIsLoading = (state) => state.isLoading;

export default usTopStoriesSlice.reducer;
