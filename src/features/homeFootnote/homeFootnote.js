import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeFootnote from "../../api/footnote";
import { API_KEY } from "../../api/api_key";

const FOOTNOTES_END_POINT = "shared/1/facebook.json?api-key=";

export const loadFootnoteData = createAsyncThunk("home/homeFootnote", async () => {
  try {
    const response = await homeFootnote.get(`${FOOTNOTES_END_POINT}${API_KEY}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("ERROR_FOOTNOTE...", error.message);
  }
});

const initialState = {
  loadData: [],
  isLoading: false,
  hasError: false,
};
const footnoteSlice = createSlice({
  name: "homeFootnote",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadFootnoteData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadFootnoteData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.loadData = action.payload;
      })
      .addCase(loadFootnoteData.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectFootnoteData = (state) => state.homeFootnote.loadData;
export const selectFootnoteIsLoading = (state) => state.homeFootnote.isLoading;

export default footnoteSlice.reducer;