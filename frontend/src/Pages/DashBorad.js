import React, { useState } from "react";

function DashBorad() {
  let [counterP1, setcounterP1] = useState(0);
  let [counterP2, setcounterP2] = useState(0);
  let [counterP3, setcounterP3] = useState(0);
  let [counterWater, setcounterWater] = useState(0);

  function hundlePlusp1() {
    setcounterP1(++counterP1);
  }
  function hundleMinusp1() {
    setcounterP1(--counterP1);
  }

  function hundlePlusp2() {
    setcounterP2(++counterP2);
  }
  function hundleMinusp2() {
    setcounterP2(--counterP2);
  }

  function hundlePlusp3() {
    setcounterP3(++counterP3);
  }
  function hundleMinusp3() {
    setcounterP3(--counterP3);
  }

  function hundlePlusWater() {
    setcounterWater(++counterWater);
  }
  function hundleMinusWater() {
    setcounterWater(--counterWater);
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-20 lg:grid-cols-2">
      <div className="grid grid-cols-1 text-center shadow-lg rounded  ">
        <h2 className="text-xl text-white font-medium"> Program 1 </h2>
        <button
          className=" border border-gray-400 bg-blue-700 w-1/4 m-auto rounded text-white mb-4 p-1"
          onClick={hundlePlusp1}
        >
          +
        </button>
        <p className="text-white">{counterP1} Times</p>
        <button
          onClick={hundleMinusp1}
          className="border border-gray-400 bg-red-700 w-1/4 m-auto rounded text-white mb-4 p-1"
        >
          -
        </button>
      </div>
      <div className="grid grid-cols-1 text-center shadow-md rounded">
        <h2 className="text-xl text-white font-medium"> Program 2 </h2>
        <button
          className=" border border-gray-400 bg-blue-700 w-1/4 m-auto rounded text-white mb-4 p-1"
          onClick={hundlePlusp2}
        >
          +
        </button>
        <p className="text-white">{counterP2} Times</p>
        <button
          onClick={hundleMinusp2}
          className="border border-gray-400 bg-red-700 w-1/4 m-auto rounded text-white mb-4 p-1"
        >
          -
        </button>
      </div>
      <div className="grid grid-cols-1 text-center shadow-md rounded">
        <h2 className="text-xl text-white font-medium"> Program 3 </h2>
        <button
          className=" border border-gray-400 bg-blue-700 w-1/4 m-auto rounded text-white mb-4 p-1"
          onClick={hundlePlusp3}
        >
          +
        </button>
        <p className="text-white">{counterP3} Times</p>
        <button
          onClick={hundleMinusp3}
          className="border border-gray-400 bg-red-700 w-1/4 m-auto rounded text-white mb-4 p-1"
        >
          -
        </button>
      </div>
      <div className="grid grid-cols-1 text-center shadow-md rounded">
        <h2 className="text-xl text-white font-medium"> Water </h2>
        <button
          className=" border border-gray-400 bg-blue-700 w-1/4 m-auto rounded text-white mb-4 p-1"
          onClick={hundlePlusWater}
        >
          +
        </button>
        <p className="text-white">{counterWater} cups</p>
        <button
          onClick={hundleMinusWater}
          className="border border-gray-400 bg-red-700 w-1/4 m-auto rounded text-white mb-4 p-1"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default DashBorad;
