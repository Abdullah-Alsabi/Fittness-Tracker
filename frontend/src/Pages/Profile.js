import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./Pages.css";
function Profile() {
  const navigate = useNavigate();
  const [logedUserData, setlogedUserData] = useState();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    let user = JSON.parse(atob(token));
    console.log(user);
    if (user == null || user.type != "user") {
      navigate("/noAccess");
    } else {
      setlogedUserData(user);
    }
  }, []);

  console.log(logedUserData);
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let newdate = year + "/" + month + "/" + day;
  function hundleEdit() {
    let elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
  }
  function hundleUpdate() {
    let elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
  }

  return (
    <div className=" min-h-full flex flex-col p-2 pt-4 md:p-10 lg:p-10 xl:p-10">
      <div className="container  m-auto  flex flex-1 flex-col items-center justify-center px-20 ">
        <div className="bg-white flex flex-col px-6 py-8 rounded shadow-md text-black cardWidth  ">
          <div className="flex flex-row justify-between pb-5">
            <h1 className=" text-3xl text-center">User Profile</h1>
            <button
              onClick={hundleEdit}
              type="submit"
              className="  w-4/12 text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none "
            >
              {" "}
              Edit
            </button>
          </div>
          <hr className="pb-5" />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Name"
            placeholder="Abdullah"
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Email"
            placeholder="Email"
            disabled
          />
          <input
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Password"
            placeholder="Password"
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="date"
            placeholder={newdate}
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="height"
            placeholder={"180" + " cm"}
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="weight"
            placeholder={"80" + " kg"}
            disabled
          />
          <div className="text-center">
            <button
              onClick={hundleUpdate}
              type="submit"
              className="w-auto text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none my-1 lg:w-8/12 "
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
