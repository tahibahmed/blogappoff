import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogApi = createAsyncThunk("getBlogApi",async()=>{
    const baseUrl = `https://fair-pink-tadpole-boot.cyclic.app/adam/post`
    const response = await fetch(baseUrl,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "Authorization": localStorage.getItem("authToken"),
          }
    })
    const result = await response.json()
    return result
})
export const getBlog = createSlice({
    name:"getBlog",
    initialState:{
        isLoading:false,
        isError:false,
        data:null
    },
    extraReducers:(builder)=>{
        builder.addCase(getBlogApi.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(getBlogApi.fulfilled,(state,action)=>{
            state.data = action.payload.posts
            state.isLoading = false
            state.isError =false
        })
        builder.addCase(getBlogApi.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
        })
    }

})

export default getBlog.reducer