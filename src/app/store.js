import { configureStore } from "@reduxjs/toolkit";
import homeTopStoriesReducer from "../features/homeTopStories/homeTopStoriesSlice";
import artsTopStoriesReducer from "../features/artsTopStories/artsTopStories";
import fashionTopStoriesReducer from "../features/fashionTopStories/fashionTopStoriesSlice";
import searchTermReducer from "../features/searchTerm/searchTerm";
import searchFieldReducer from "../features/searchField/searchField.js";
import usTopStoriesReducer from "../features/usTopStories/usTopStoriesSlice"
import homeFootnoteReducer from "../features/homeFootnote/homeFootnote";
import fashionFootnoteReducer from "../features/fashionFootnote/fashionFootnoteSlice"
import artsFootnoteReducer from "../features/artsFootnote/artsFootnoteSlice";
import usFootnoteReducer from "../features/usFootnote/usFootnoteSlice";
export default configureStore({
  reducer: {
    home: homeTopStoriesReducer,
    arts: artsTopStoriesReducer,
    fashion: fashionTopStoriesReducer,
    search: searchTermReducer,
    searchField: searchFieldReducer,
    us: usTopStoriesReducer,
    homeFootnote: homeFootnoteReducer,
    fashionFootnote: fashionFootnoteReducer,
    artsFootnote: artsFootnoteReducer,
    usFootnote: usFootnoteReducer
  },
});
