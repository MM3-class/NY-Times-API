import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import footnote from "../../api/footnote";
import { API_KEY } from "../../api/api_key";

const FASHION_END_POINT = "emailed/7.json?api-key=";

export const loadFashionFootnote = createAsyncThunk(
  "fashion/fashionFootnote",
  async () => {
    try {
      const response = await footnote.get(`${FASHION_END_POINT}${API_KEY}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("FASHION_FOOTNOTE", error.message);
    }
  }
);
const initialState = {
  getData: [],
  isLoading: false,
  hasError: false,
};
const fashionFootnoteSlice = createSlice({
  name: "fashionFootnote",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadFashionFootnote.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadFashionFootnote.fulfilled, (state, action) => {
        state.getData = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadFashionFootnote.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
export const selectFashionFootnote = (state) => state.fashionFootnote.getData;
export const selectFashionFootnoteIsLoading = (state) =>
  state.fashionFootnote.isLoading;
export default fashionFootnoteSlice.reducer;

