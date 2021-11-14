import React from "react";
import "./Pages.css";
function Profile() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let newdate = year + "/" + month + "/" + day;

  return (
    <div className=" min-h-full flex flex-col p-2 pt-4 md:p-10 lg:p-10 xl:p-10">
      <div className="container  max-w-lg m-auto  flex flex-1 flex-col items-center justify-center px-20 ">
        <div className="bg-white flex flex-col px-6 py-8 rounded shadow-md text-black cardWidth  ">
          <h1 className="mb-8 text-3xl text-center">User Profile</h1>
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
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="weight"
            placeholder={"80" + " kg"}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;

// <button
// type="submit"
// className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none my-1"
// >
// Login
// </button>
