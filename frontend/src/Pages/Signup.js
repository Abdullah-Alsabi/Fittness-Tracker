import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordTwo, setPasswordTwo] = useState("");

  function hundleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function hundleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  function hundlePasswordChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  function hundlePasswordTwoChange(e) {
    console.log(e.target.value);
    setPasswordTwo(e.target.value);
  }

  function hundleRgister(e) {
    e.preventDefault();
    if (password === passwordTwo) {
      let user = {
        name: name,
        email: email,
        password: password,
      };
      Axios.post("http://localhost:3001/users/add", user)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="bg-gray-800 pt-44 flex flex-col">
      <div className="container  max-w-lg mx-auto flex flex-1 flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            onChange={hundleNameChange}
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Name"
            placeholder="Name"
          />
          <input
            onChange={hundleEmailChange}
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Email"
            placeholder="Email"
          />
          <input
            onChange={hundlePasswordChange}
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={hundlePasswordTwoChange}
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            onClick={hundleRgister}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none my-1"
          >
            Create Account
          </button>
          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/signin"
              className="text-gray-500 uppercase text-xs hover:text-gray-400 underline "
            >
              Do you have an account?
            </Link>
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
