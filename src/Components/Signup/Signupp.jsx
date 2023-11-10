import React, { useState } from "react";

import vector from "../../Img/box-vector-19.jpg";
import bg2 from "../../Img/bg.jpg";
import bg3 from "../../Img/mountains-8347890_1280.jpg";
import "./signup.css";
import { useDispatch } from "react-redux";
import { postdata } from "../../Redux/Slices/SignupSlice";
import { NavLink, useNavigate } from "react-router-dom";
import  Validation  from "./Validation";

const Signupp = () => {
  const [users, setUsers] = useState({});
  const [error, seterror] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getdata = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(postdata(users));
   seterror(Validation(users))
    navigate("/login");
    console.log("first");
    console.log(users);
  };
  return (
    <div className="divv">
      <div className="container">
        <div className="row justify-content-center" id="r1-signup">
          <div
            className="col-6 col-md-6 align-self-center "
            id="img-colum-sign"
          >
            <img src={bg3} alt="" className="img-fluid" />
          </div>
          <div className="col-6 col-md-6  bg-white " id="form-colum-sign">
            <div className="row justify-content-center">
              <div className="col col-md-12" id="r3-vector">
                <img src={vector} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="">
              <form onSubmit={handlesubmit}>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={getdata}
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                </div>
                {error.name && <p style={{color :'red'}}>{error.name}</p>}
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={getdata}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {error.email && <p style={{color :'red'}}>{error.email}</p>}
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={getdata}
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                {error.password && <p style={{color :'red'}}>{error.password}</p>}
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={getdata}
                    class="form-control"
                    id="confirmPassword"
                  />
                </div>
                {error.confirmPassword && <p style={{color :'red'}}>{error.confirmPassword}</p>}
                <button type="submit" class="btn btn-primary btn-signup">
                  Signup
                </button>
                <button class="btn btn-info ">
                  {" "}
                  <NavLink to={"/login"}></NavLink>LOgin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupp;
