import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import footnote from "../../api/footnote";
import {API_KEY} from "../../api/api_key";

const ART_END_POINT = "viewed/1.json?api-key=";

export const loadArtsFootnote = createAsyncThunk(
  "arts/artsFootnote",
  async () => {
    try {
      const response = await footnote.get(`${ART_END_POINT}${API_KEY}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("ARTS_FOOTNOTE_ERROR", error.message);
    }
  }
);

const initialState = {
  getData: [],
  isLoading: false,
  hasError: false,
};

const artsFootnoteSlice = createSlice({
  name: "artsFootnote",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadArtsFootnote.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadArtsFootnote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.getData = action.payload;
      })
      .addCase(loadArtsFootnote.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectArtsFootnote = (state) => state.artsFootnote.getData;
export const selectArtsFootnoteIsLoading = (state) => state.artsFootnote.isLoading;
export default artsFootnoteSlice.reducer;
