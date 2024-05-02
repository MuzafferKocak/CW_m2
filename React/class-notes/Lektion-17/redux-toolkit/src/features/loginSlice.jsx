import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
};

const loginSlice = createSlice({
  name: "login",    //?action type
  initialState,
  reducers: {      //? Reducer
    setUser: (state, action) => {
        //? action creator funcs.
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = { email: "", password: "" };
    },
  },
});

//? oulusan action fonksiyonlari sliceAdi.actions dan destructure edilerek export edilir
export const { setUser, clearUser } = loginSlice.actions;

//? yazilan silicenin reduceri siliceAdi.reducer seklinde export edilmelidir
export default loginSlice.reducer;
