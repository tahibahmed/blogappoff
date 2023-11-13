import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postdata = createAsyncThunk("postdata", async (data) => {
  let url =("https://fair-pink-tadpole-boot.cyclic.app/adam/user")


  let response = await fetch(url,  {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
   
  let result = await response.json();
  return result;
});

export const Postslice = createSlice({
  name: "UserPost",
  initialState: {
    data: [],
    isloading: false,
    accesstoken :null,
    authToken:null,
    localStorage : null
  },
  extraReducers: (builder) => {
    builder
      .addCase(postdata.pending, (state, action) => {
        state.isloading = true
      })
      .addCase(postdata.fulfilled, (state, action) => {
        state.isloading = false
        state.data.push(action.payload)
        console.log(action.payload)
        // state.authToken = action.payload.data.authToken
      })
      .addCase(postdata.rejected,(state,action)=>{
        state.isloading = false
   })
  },
});

export default Postslice.reducer;
