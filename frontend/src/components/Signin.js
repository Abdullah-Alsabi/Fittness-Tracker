import { Link } from "react-router-dom";

function signup() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <div className="container  max-w-sm mx-auto flex flex-1 flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Email"
            placeholder="Email"
          />
          <input
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none my-1"
          >
            Login
          </button>
          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/signup"
              className="text-gray-500 uppercase text-xs hover:text-gray-400 underline "
            >
              Create an account
            </Link>
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
