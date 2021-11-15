import React from "react";
import { useTimer } from "react-timer-hook";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsPauseCircleFill } from "react-icons/bs";

function Timer({ expiryTimestamp, flag }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.log("onExpire called"),
  });

  return (
    <div style={{ display: flag }} className="text-center text-white text-2xl">
      <div className="text-lg text-center mt-8">
        <span className=" bg-gray-100 rounded-full w-max p-4 mt-5 mb-5 font-semibold text-2xl text-gray-700">
          <span>{minutes}</span>:<span>{seconds}</span>
        </span>
      </div>
      <div className="flex justify-center mt-8 mb-5">
        <button className="mr-2" onClick={pause}>
          <BsPauseCircleFill className="text-5xl" />
        </button>
        <button onClick={resume}>
          <BsPlayCircleFill className="text-5xl" />
        </button>
      </div>
    </div>
  );
}
export default Timer;
