import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchTermApi from "../../api/searchTermApi";
import { API_KEY } from "../../api/api_key";

export const loadSearchField = createAsyncThunk(
  "search/searchField",
  async (term) => {
    try {
      const response = await searchTermApi.get(`${term}&api-key=${API_KEY}`);
      const data = await response.data;
      return data;
    } catch (err) {
      console.log("SEARCH TERM...", err.message);
    }
  }
);

const initialState = {
  searchData: [],
  isLoading: false,
  hasError: false,
};

const searchTermSlice = createSlice({
  name: "searchField",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchField.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSearchField.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.searchData = action.payload
      })
      .addCase(loadSearchField.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectSearchData = (state) => state.searchField.searchData;
export const selectIsLoadingSearch = (state) => state.searchField.isLoading;

export default searchTermSlice.reducer;
