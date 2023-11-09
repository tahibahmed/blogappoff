import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const blogpost = createAsyncThunk("blogpost", async (formData) => {
  const urlpost ="https://fair-pink-tadpole-boot.cyclic.app/adam/post"
  let responseurl = await fetch(urlpost,{
    method: "POST",
    headers: {"Authorization" : localStorage.getItem("authToken")},
    body: formData
  });

  let result = await responseurl.json();
  return result;
});
console.log(localStorage.getItem("authToken"))
export const blogdataslice = createSlice({
  name: "blogpost",
  initialState: {
    data: null,
    loading: false,
    authToken: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogpost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(blogpost.fulfilled, (state, action) => {
        state.loading = false;
        state.data=action.payload
      })
      .addCase(blogpost.rejected, (state, action) => {
        state.loading = false;
        state.data= null
      });
  }

});

export default blogdataslice.reducer;
