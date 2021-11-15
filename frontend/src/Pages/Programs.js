import p1 from "../images/p1.jpg";
import { Link } from "react-router-dom";
// import gif
// import gifpic from "../images/7ed6d7c74d9befc91815a3afe73d6ec7.gif";
//use gif
// <img height="250px" width="250px" src={gifpic} alt="gif" />

function Programs() {
  return (
    <>
      <div className="text-white font-bold w-10/12 m-auto py-5 items-center grid  gap-2 lg:grid-cols-3 lg:px-5 ">
        <div
          style={{
            backgroundImage:
              `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(` +
              p1 +
              `)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-52  text-center p-3 rounded-lg"
        >
          <h1 className="relative top-1/4 text-3xl"> Beginners </h1>

          <div className="relative top-1/2 w-full flex">
            <p className="w-2/3">10 exercises, 2min</p>
            <Link to="/exercises">
              <button className=" m-auto bg-white text-black rounded-lg py-1 px-3">
                {" "}
                Go Train{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
