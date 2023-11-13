import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogApi } from "../../Redux/Slices/getBlog";
import { deleteBlogApi } from "../../Redux/Slices/Delete";
import { useNavigate } from "react-router-dom";

const GetAllblogs = ({ Blogs }) => {
  // const dispatch = useDispatch();

  // const { data, loading } = useSelector((state) => state.getBlog);
  // const { isLoggedIn } = useSelector(state => state.Userget)


  // const { isLoading } = useSelector((info) => info.deleteBlogss);


  // useEffect(() => {
  //   dispatch(getBlogApi());
  // }, [isLoading, loading])


  return (
    <div>
      {/* {loading ? (
        <h1>Loading Please Wait...</h1>
      ) : ( */}
      <div className="container">
        <div className="row">
          {/* {data &&
              data.map((item) => (
                <div
                  key={item._id}
                  className="col-12 col-md-10 p-3 mt-3 border border-3 rounded"
                >
                  <div className="row">
                    <div className="col-12 col-md-5">
                      <img
                        src={item.url}
                        alt=""
                        className="img-fluid "
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "550px",
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <h1>{item.type}</h1>
                      <p>{item.description}</p>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="row">
                        <div className="col-6">
                          <button
                            onClick={() => {
                              dispatch(deleteBlogApi(item._id));
                            }}
                            className="btn btn-danger"
                          >
                            delete
                          </button>
                        </div>
                        <div className="col-6 ">
                          <button className="btn btn-primary"> update </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default GetAllblogs;
