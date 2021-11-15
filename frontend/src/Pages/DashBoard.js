import React, { useState } from "react";
import { IoIosFitness } from "react-icons/io";
import { GiWaterBottle } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { GiWeightScale } from "react-icons/gi";

function DashBoard() {
  let [counterP1, setcounterP1] = useState(0);
  let [counterP2, setcounterP2] = useState(0);
  let [counterP3, setcounterP3] = useState(0);
  let [counterWater, setcounterWater] = useState(0);
  let [height, setheight] = useState(170);
  let [weight, setweight] = useState(70);
  let [BMI, setBMI] = useState();
  const [BMIText, setBMIText] = useState("");

  // function hundlePlusp1() {
  //   setcounterP1(++counterP1);
  // }
  // function hundleMinusp1() {
  //   setcounterP1(--counterP1);
  // }

  // function hundlePlusp2() {
  //   setcounterP2(++counterP2);
  // }
  // function hundleMinusp2() {
  //   setcounterP2(--counterP2);
  // }

  // function hundlePlusp3() {
  //   setcounterP3(++counterP3);
  // }
  // function hundleMinusp3() {
  //   setcounterP3(--counterP3);
  // }

  function hundlePlusWater() {
    setcounterWater(++counterWater);
  }
  function hundleMinusWater() {
    setcounterWater(--counterWater);
  }

  function computeBmi() {
    let bmiValue = weight / height / height;
    setBMI(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBMIText(bmiClass);
  }

  function getBmi(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  }

  return (
    <div className="grid grid-cols  gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3">
      <div className="flex flex-row   p-4 justify-around items-center h-36 text-center shadow-lg rounded bg-gradient-to-r from-green-400 to-blue-500  ">
        <div className="w-2/6 flex justify-center">
          <IoIosFitness className="text-green-700 text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Program 1 </h2>
          <p className="text-white">{counterP1} Times</p>
        </div>
      </div>
      <div className="flex flex-row  p-4 justify-around items-center  h-36 text-center shadow-md rounded bg-gradient-to-r from-yellow-300 to-primary">
        <div className="w-2/6 flex justify-center">
          <IoIosFitness className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Program 2 </h2>
          <p className="text-white">{counterP2} Times</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-red-400 to-red-700">
        <div className="w-2/6 flex justify-center">
          <IoIosFitness className="text-red-700 text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Program 3 </h2>
          <p className="text-white">{counterP3} Times</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-green-300 to-blue-700">
        <div className="w-2/6 flex justify-center">
          <GiWaterBottle className="text-blue-700 text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Water </h2>
          <div className="flex flex-row justify-center items-center">
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
      </div>

      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-pink-400 to-gray-500">
        <div className="w-2/6 flex justify-center">
          <GiBodyHeight className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Height </h2>
          <p className="text-white">{height} cm</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-pink-400 to-gray-500">
        <div className="w-2/6 flex justify-center">
          <FaWeight className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Weight </h2>
          <p className="text-white">{weight} kg</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-red-400 to-red-300">
        <div className="w-2/6 flex justify-center">
          <GiWeightScale className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> BMI </h2>
          <p className="text-white">{BMI}</p>
          <p className="text-white">{BMIText}</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
