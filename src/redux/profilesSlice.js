import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
  name: "profiles",

  initialState: {
    //Searchbar related states
    searchinput: "",
    searchResult: {},
    //displayed profile states
    currentProfile: {},
    profileRepos: [],
  },

  reducers: {
    setSearchInput(state, action) {
      state.searchinput = action.payload;
    },
    setSearchResult(state, action) {
      state.searchResult = action.payload;
    },
    setCurrentProfile(state, action) {
      state.currentProfile = action.payload;
    },
    setProfileRepos(state, action) {
      state.profileRepos = action.payload;
    },
  },
});

export const {
  setSearchInput,
  setSearchResult,
  setCurrentProfile,
  setProfileRepos,
} = profilesSlice.actions;
export default profilesSlice.reducer;
