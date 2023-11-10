import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginuser = createAsyncThunk("loginuser", async (data) => {
  const urllogin ="https://fair-pink-tadpole-boot.cyclic.app/adam/user/login";
  let response = await fetch(urllogin, {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  let result = await response.json();
  console.log(result)
  return result;
});

export const getslicee = createSlice({
  name: "Userget",
  initialState: {
    data: null,
    isloading: false,
    authToken: null,
    localStorage: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginuser.pending, (state, action) => {
        state.isloading = true;
      })
      builder .addCase(loginuser.fulfilled,(state, action) => {
        state.data = action.payload;
        console.log(action.payload)
        state.authToken = action.payload.data.authToken;
        localStorage.setItem(
          "authToken",
          "Bearer" + " " + action.payload.data.authToken
        );
        state.isLoggedIn = true;
        state.isloading = false;
      })
      builder .addCase(loginuser.rejected, (state, action) => {
        state.isloading = false;
        state.isLoggedIn = false;
      });
  },
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.isloading = false;
      localStorage.removeItem("authToken" );
    },
    
  },
});

export const { logout } = getslicee.actions;
export default getslicee.reducer;
