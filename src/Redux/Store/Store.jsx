import { configureStore } from "@reduxjs/toolkit";

import  Postslice  from "../Slices/SignupSlice";
import getslicee  from "../Slices/LoginSlice";
import blogdataslice  from "../Slices/Blogslice";
import  Allblogdataslice  from "../Slices/Allblogs";
import getBlog from "../Slices/getBlog";
import deleteBlogss from "../Slices/Delete"

export const Store = configureStore({
  reducer: {
    UserPost : Postslice,
    Userget : getslicee,
    blogpost : blogdataslice,
    getBlog:getBlog,
    deleteBlogss :  deleteBlogss
  },
});

export default Store;
