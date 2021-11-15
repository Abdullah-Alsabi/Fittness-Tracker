import React, { useState } from "react";
import ExercisesGifImport from "../images/gifSquats.gif";
import Timer from "../components/Timer";

function Exercises() {
  const [ProgramName, setProgramName] = useState("Beginer Program");
  const [ProgramDuration, setProgramDuration] = useState(15);

  const [ExercisesName, setExercises] = useState("Squats");
  const [ExercisesDuration, setExercisesDuration] = useState(2.5);
  const [ExercisesGif, setExercisesGif] = useState(ExercisesGifImport);

  const [flag, setFlag] = useState("none");
  const time = new Date();
  time.setSeconds(time.getSeconds() + 150); // 10 minutes timer

  return (
    <div className="grid grid-cols-1 text-center p-4  mt-5  m-auto lg:w-5/12 xl:w-5/12 xl:px-12 ">
      <div className="h-1/6 flex flex-row justify-between items-center  ">
        <h1 className="text-white text-lg text-center">{ProgramName}</h1>
        <p className="text-white">{ProgramDuration} min</p>
      </div>
      <hr className=" h-1 w-1 min-w-full" />
      <div className="flex flex-col justify-center items-center  mt-4  bg-gray-600">
        <img className="p-4 " src={ExercisesGif} alt="Squats" />
        <p className="text-white font-semibold text-2xl">{ExercisesName} </p>
        <Timer flag={"block"} expiryTimestamp={time} className="mb-5" />
      </div>
      <button
        onClick={() => {
          flag === "none" ? setFlag("block") : setFlag("none");
        }}
        className="text-white bg-primary p-2 mt-5 rounded"
        type="submit"
      >
        Start
      </button>
    </div>
  );
}

export default Exercises;

// <button
//         onClick={() => {
//           flag === "none" ? setFlag("block") : setFlag("none");
//         }}
//         className="text-white bg-primary p-2 mt-5 rounded"
//         type="submit"
//       >
//         Start
//       </button>
//       <Timer flag={flag} expiryTimestamp={time} />
