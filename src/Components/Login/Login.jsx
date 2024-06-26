import React, { useEffect, useState } from "react";
import bg1 from "../../Img/fire-8230528_1920.jpg";
import vector from "../../Img/box-vector-19.jpg";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginuser } from "../../Redux/Slices/LoginSlice";
import instance from "../../Instance/instance";


const Login = () => {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authToken, isloading, isLoggedIn } = useSelector((state) => state.Userget);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("user/login", input)
      if (response?.data?.message === "Successful") {
        console.log("login")
        await localStorage.setItem("authToken", response?.data?.data?.authToken);
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
    // dispatch(loginuser(input));
  };



  return (
    <div className="divv">
      {isloading ? (
        <h1>loading please wait</h1>
      ) : (
        <div className="container">
          <div className="row justify-content-center" id="r1-login">
            <div
              className="col-6 col-md-6 align-self-center"
              id="img-colum-sign"
            >
              <img src={bg1} alt="" className="img-fluid" />
            </div>
            <div className="col-6 col-md-6  bg-white " id="form-colum-login">
              <div className="row justify-content-center">
                <div className="col col-md-12" id="r3-vector">
                  <img src={vector} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="">
                <form onSubmit={handlesubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-login">
                    Login Here
                  </button>
                  <NavLink to={"/"}>You dont have account</NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
