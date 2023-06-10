import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import footnote from "../../api/footnote";
import { API_KEY } from "../../api/api_key";

const US_END_POINT = "emailed/1.json?api-key=";

export const loadUsFootnote = createAsyncThunk("us/usFootnote", async () => {
  try {
    const response = await footnote.get(`${US_END_POINT}${API_KEY}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("US_FOOTNOTE_ERROR", error.message);
  }
});

const initialState = {
  getData: [],
  isLoading: false,
  hasError: false,
};
const usFootnoteSlice = createSlice({
  name: "usFootnote",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadUsFootnote.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadUsFootnote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.getData = action.payload;
      })
      .addCase(loadUsFootnote.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectUsFootnote = (state) => state.usFootnote.getData;
export const selectUsFootnoteIsLoading = (state) => state.usFootnote.isLoading;

export default usFootnoteSlice.reducer;
