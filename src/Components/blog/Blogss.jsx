import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogpost } from "../../Redux/Slices/Blogslice";
import GetAllblogs from "../GetAll/GetAllblogs";
import { logout } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";
import instance from "../../Instance/instance";

const Blogss = () => {
  const navigate = useNavigate();
  const [inputData, SetInputData] = useState({
    type: "",
    post: null,
    description: "",
  });
  const [Blogs, setBlogs] = useState([])
  console.log(Blogs)
  const handlechange = (e) => {
    if (e.target.name === "post") {
      SetInputData({ ...inputData, post: e.target.files[0] });
    } else {
      SetInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };
  const logoutfunc = () => {
    localStorage?.removeItem("authToken")
    navigate("/login");
  };

 

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (inputData.type && inputData.post && inputData.description) {
        const formData = new FormData();
        formData.append("type", inputData?.type);
        formData.append("post", inputData?.post);
        formData.append("description", inputData?.description);
        console.log(formData.getAll('post'))
        const response = await instance.post("post", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        GetBlogs()
        console.log(response, "response")
      };
    } catch (error) {
      console.log(error)
    }
  } 
  const GetBlogs = async () => {
    const response = await instance.get("post")
    setBlogs(response?.data)
  }
  useEffect(() => {
    GetBlogs()
  }, [])
  return (
    <div>
      <button
        onClick={() => {
          logoutfunc();
        }}
        className="btn btn-success float-end"
      >
        logout
      </button>
      <div className="container">
        <div className="row justify-content-center " id="r1-blog">
          <div
            className="col-12 col-md-10 align-self-center"
            id="r2-blog-colum"
          >
            <h1>Add post </h1>
            <div>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="type"
                    value={inputData.type}
                    onChange={(e) => {
                      handlechange(e);
                    }}
                    placeholder="Post Here"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="description"
                    value={inputData.description}
                    onChange={(e) => {
                      handlechange(e);
                    }}
                    className="form-control"
                    placeholder="Description"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    name="post"
                    onChange={(e) => {
                      handlechange(e);
                    }}
                    id="formFileMultiple"
                  />
                </div>
                <button
                  onClick={(e) => {
                    handlesubmit(e);
                  }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Create Post
                </button>
              </form>
            </div>
            <GetAllblogs Blogs={Blogs} GetBlogs ={GetBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogss;
