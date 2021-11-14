import axios from "axios";
import { useState, useEffect } from "react";
import "./admin.css";
function Admin() {
  let [inputs, setInputs] = useState([]);
  let [exNames, setExNames] = useState([]);
  let [exDurations, setExDurations] = useState([]);
  let [exLinks, setExLinks] = useState([]);
  console.log(exNames);
  console.log(exDurations);
  console.log(exLinks);
  function handelNewForm() {
    setInputs([
      ...inputs,
      <div className="flex flex-row w-full">
        <div className="w-11/12">
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              className="block border w- border-gray-400 w-full p-3 rounded mb-4"
              name="p1_counter"
              placeholder="Exercisers Name"
              onChange={(e) => {
                exNames[inputs.length] = e.target.value;
                setExNames(exNames);
              }}
            />
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="p2_counter"
              placeholder="Exercisers duration"
              onChange={(e) => {
                exDurations[inputs.length] = e.target.value;
                setExDurations(exDurations);
              }}
            />
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="p3_counter"
              placeholder="Exercisers Image Link"
              onChange={(e) => {
                exLinks[inputs.length] = e.target.value;
                setExLinks(exLinks);
              }}
            />
          </div>
        </div>
        <div className="w-1/12 ml-2">
          <button className="border border-gray-400 w-full bg-red-700 rounded text-white mb-4 p-3">
            -
          </button>
        </div>
      </div>,
    ]);
  }

  return (
    <div className="min-h-full flex flex-col p-2 pt-4 md:p-10 lg:p-10 xl:p-10">
      <div className="container  max-w-lg m-auto  flex flex-1 flex-col items-center justify-center px-20 ">
        <div className="bg-white flex flex-col px-6 py-8 rounded shadow-md text-black cardWidth  ">
          <h1 className="mb-8 text-3xl text-center">Add New Program</h1>
          <hr className="pb-5" />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="title"
            placeholder="Program Title"
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Image"
            placeholder="Background Image Link"
          />
          <button
            className=" border border-gray-400 bg-blue-700 w-1/12 m-auto rounded text-white mb-4 p-1"
            onClick={handelNewForm}
          >
            +
          </button>
          {inputs}
        </div>
      </div>
    </div>
  );
}

export default Admin;
