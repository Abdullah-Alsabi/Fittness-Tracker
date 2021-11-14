import axios from "axios";
import { useState, useEffect } from "react";
import "./admin.css";
function Admin() {
  const [inputs, setInputs] = useState([]);

  console.log(inputs);

  // ----------------- ERROR HERE ---------

  function handelNewForm() {
    setInputs([...inputs, {}]);
  }
  function handelDeleteForm(element, i) {
    setInputs(inputs.filter((item) => item.name !== element.name));
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
            className=" border border-gray-400 bg-blue-700 min-w-max w-2/12 m-auto rounded text-white mb-4 p-3"
            onClick={handelNewForm}
          >
            <h1 className="text-3xl font-extrabold">+</h1>
          </button>

          {inputs.map((element, i) => {
            return (
              <div className="flex lg:flex-row flex-col w-full ">
                <div className="lg:w-11/12 w-full">
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    <input
                      type="text"
                      className="block border  border-gray-400 w-full p-3 rounded mb-4"
                      name="p1_counter"
                      placeholder="Exercisers Name"
                      value={element.name}
                      onChange={(e) => {
                        element.name = e.target.value;
                        setInputs([...inputs]);
                      }}
                    />
                    <input
                      type="text"
                      className="block border border-gray-400 w-full p-3 rounded mb-4"
                      name="p2_counter"
                      placeholder="Exercisers duration"
                      value={element.duration}
                      onChange={(e) => {
                        element.duration = e.target.value;
                        setInputs([...inputs]);
                      }}
                    />
                    <input
                      type="text"
                      className="block border border-gray-400 w-full p-3 rounded mb-4"
                      name="p3_counter"
                      placeholder="Exercisers Image Link"
                      value={element.link}
                      onChange={(e) => {
                        element.link = e.target.value;
                        setInputs([...inputs]);
                      }}
                    />
                  </div>
                </div>
                <div className="lg:w-1/12 w-full lg:ml-2 ml-0">
                  <button
                    onClick={() => {
                      handelDeleteForm(element, i);
                    }}
                    className="border border-gray-400 w-full bg-red-700 rounded text-white mb-4 p-3"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
