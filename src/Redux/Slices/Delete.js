
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const deleteBlogApi = createAsyncThunk("deleteBlogApi", async (id) => {
  console.log(id);
  const baseUrl = `https://fair-pink-tadpole-boot.cyclic.app/adam/post/delete/${id}`;
  const response = await fetch(baseUrl, {
    method: "Delete",
    headers: {"Authorization": localStorage.getItem("authToken")}
});
  console.log(response)

  if (response.ok) {
    return id; 
  } else {
    const errorData = await response.json();
    console.log(errorData) 
    throw new Error(errorData.message); 
  }
});

export const deleteBlogss = createSlice({
  name: "deleteBlogss",
  initialState: {
    isLoading: false,
    isError: false,
    dataset: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBlogApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBlogApi.fulfilled, (state, action) => {
      state.dataset = state.dataset?.filter((item) => item._id !== action.payload);
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(deleteBlogApi.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default deleteBlogss.reducer