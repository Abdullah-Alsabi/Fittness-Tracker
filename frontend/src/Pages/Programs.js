import p1 from "../images/p1.jpg";
function Programs() {
  return (
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
          <button className=" m-auto bg-white text-black rounded-lg py-1 px-3">
            {" "}
            Go Train{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
