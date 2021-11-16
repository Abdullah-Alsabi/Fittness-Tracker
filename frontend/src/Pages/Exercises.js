import React, { useState, useEffect } from "react";
// import { useTimer } from "react-timer-hook";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsPauseCircleFill } from "react-icons/bs";
import axios from "axios";

function Exercises() {
  const [ExercisesName, setExercisesName] = useState("");
  const [ExercisesDuration, setExercisesDuration] = useState(0);
  const [ExercisesGif, setExercisesGif] = useState();
  //get the data
  const [BtnStatus, setBtnStatus] = useState("Start");

  const [programs, setPrograms] = useState([]);

  function Timer(i) {
    let inverval = setInterval(() => {
      if (ExercisesDuration >= 1)
        setExercisesDuration((ExercisesDuration) => ExercisesDuration - 1);
      else clearInterval(inverval);
    }, 1000);
    let counter = i + 1 < programs.exercises.length ? 1000 : 0;
    setTimeout(() => {
      // ---
      let id = i + 1;

      clearInterval(inverval);
      if (id < programs.exercises.length) {
        setExercisesName(programs.exercises[id].name);
        setExercisesDuration(programs.exercises[id].duration);
        setExercisesGif(programs.exercises[id].link);
        Timer(id);
      } else return clearInterval(inverval);
    }, ExercisesDuration * 1000 + counter);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3001/programs/")
      .then((res) => {
        console.log(res.data[0]);
        setPrograms(res.data[0]);
        setExercisesName(res.data[0].exercises[0].name);
        setExercisesDuration(res.data[0].exercises[0].duration);
        setExercisesGif(res.data[0].exercises[0].link);
      })

      .catch((err) => {
        if (err) console.log(err);
      });
  }, []);

  // End of timer function

  return (
    <div className="grid grid-cols-1 text-center p-4  mt-5  m-auto lg:w-5/12 xl:w-5/12 xl:px-12 ">
      <div className="h-1/6 flex flex-row justify-between items-center  ">
        <h1 className="text-white text-lg text-center">{programs.title}</h1>
        <p className="text-white">15 min</p>
      </div>
      <hr className=" h-1 w-1 min-w-full mt-5" />
      <div className="flex flex-col justify-center items-center  mt-4  bg-gray-600">
        <img className="p-4 " src={ExercisesGif} alt="Squats" />
        <p className="text-white font-semibold text-2xl">{ExercisesName} </p>
        <span className=" bg-gray-100 rounded-full w-max p-4 mt-5 mb-5 font-semibold text-2xl text-gray-700">
          <span>{ExercisesDuration} sec</span>
        </span>
      </div>
      <button
        onClick={() => {
          Timer(0);
        }}
        className="text-white bg-primary p-2 mt-5 rounded"
        type="submit"
      >
        {BtnStatus}
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

// <button
// onClick={() => {
//   flag === "none" ? setFlag("block") : setFlag("none");
// }}
// className="text-white bg-primary p-2 mt-5 rounded"
// type="submit"
// >
// Start
// </button>

// *******************************
// import React, { useState, useEffect } from "react";
// import ExercisesGifImport from "../images/gifSquats.gif";
// import { useTimer } from "react-timer-hook";
// import { BsPlayCircleFill } from "react-icons/bs";
// import { BsPauseCircleFill } from "react-icons/bs";
// import axios from "axios";

// function Exercises() {
//   const [ExercisesName, setExercisesName] = useState("");
//   const [ExercisesDuration, setExercisesDuration] = useState(90);
//   const [ExercisesGif, setExercisesGif] = useState();
//   //get the data
//   const [programs, setPrograms] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/programs/")
//       .then((res) => {
//         console.log(res.data[0]);
//         setPrograms(res.data[0]);
//         setExercisesName(res.data[0].exercises[0].name);
//         setExercisesDuration(res.data[0].exercises[0].duration);
//         setExercisesGif(res.data[0].exercises[0].link);
//       })

//       .catch((err) => {
//         if (err) console.log(err);
//       });
//   }, []);

//main timer
// const [flagFullTime, setflagFullTime] = useState("none");
// const timeFullTime = new Date();
// timeFullTime.setSeconds(timeFullTime.getSeconds() + 900);

//   const [BtnStatus, setBtnStatus] = useState("Start");

//   const time = new Date();
// setExercisesDuration(30)
//   time.setSeconds(time.getSeconds() + ExercisesDuration); // 2.5 minutes timer
//   // Timer Function

//   function Timer(expiryTimestamp, afterExpireFunction) {
//     let {
//       seconds,
//       minutes,
//       hours,
//       days,
//       isRunning,
//       start,
//       pause,
//       resume,
//       restart,
//     } = useTimer({
//       expiryTimestamp,
//       autoStart: false,
//       onExpire: afterExpireFunction,
//     });

//     return (
//       <div
//         style={{ display: "block" }}
//         className="text-center text-white text-2xl"
//       >
//         <div className="text-lg text-center mt-8">
//           <span className=" bg-gray-100 rounded-full w-max p-4 mt-5 mb-5 font-semibold text-2xl text-gray-700">
//             <span>{minutes}</span>:<span>{seconds}</span>
//           </span>
//         </div>
//         <div className="flex justify-center mt-8 mb-5">
//           <button className="mr-2" onClick={pause}>
//             <BsPauseCircleFill className="text-5xl" />
//           </button>
//           <button onClick={resume}>
//             <BsPlayCircleFill className="text-5xl" />
//           </button>
//         </div>
//       </div>
//     );
//   }
//   // End of timer function

//   return (
//     <div className="grid grid-cols-1 text-center p-4  mt-5  m-auto lg:w-5/12 xl:w-5/12 xl:px-12 ">
//       <div className="h-1/6 flex flex-row justify-between items-center  ">
//         <h1 className="text-white text-lg text-center">{programs.title}</h1>
//         <p className="text-white">15 min</p>
//       </div>
//       <hr className=" h-1 w-1 min-w-full mt-5" />
//       <div className="flex flex-col justify-center items-center  mt-4  bg-gray-600">
//         <img className="p-4 " src={ExercisesGif} alt="Squats" />
//         <p className="text-white font-semibold text-2xl">{ExercisesName} </p>
//         {Timer(time, () => {
//           console.log("done timer");
//         })}
//       </div>
//       <button
//         onClick={() => {
//           BtnStatus === "Start" ? setBtnStatus("Stop") : setBtnStatus("Start");
//         }}
//         className="text-white bg-primary p-2 mt-5 rounded"
//         type="submit"
//       >
//         {BtnStatus}
//       </button>
//     </div>
//   );
// }

// export default Exercises;
