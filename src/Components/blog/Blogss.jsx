import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogpost } from "../../Redux/Slices/Blogslice";
import GetAllblogs from "../GetAll/GetAllblogs";
import { logout } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const Blogss = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [crrentuser, setcurrent] = useState({
    type: "",
    post: null,
    description: "",
  });
  const { loading } = useSelector((state) => state.blogpost);
  const handlechnage = (e) => {
    if (e.target.name === "post") {
      setcurrent({ ...crrentuser, post: e.target.files[0] });
    } else {
      setcurrent({ ...crrentuser, [e.target.name]: e.target.value });
    }
  };
  const logoutfunc = () => {
    dispatch(logout());
    navigate("/login");
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (crrentuser.type && crrentuser.post && crrentuser.description) {
      const formData = new FormData();
      formData.append("type", crrentuser.type);
      formData.append("post", crrentuser.post);
      formData.append("description", crrentuser.description);
  
      await dispatch(blogpost(formData))
      setcurrent({
        type: "",
        post: null,
        description: "",
      });
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  if (loading) {
    return (
      <div className=" position-absolute">
        <h1>Loading Please Wait...</h1>
      </div>
    );
  }
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
                    value={crrentuser.type}
                    onChange={(e) => {
                      handlechnage(e);
                    }}
                    placeholder="Post Here"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="description"
                    value={crrentuser.description}
                    onChange={(e) => {
                      handlechnage(e);
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
                      handlechnage(e);
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
            <GetAllblogs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogss;
