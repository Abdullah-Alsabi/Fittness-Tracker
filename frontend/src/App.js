import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Programs from "./Pages/Programs";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Profile from "./Pages/Profile";
import DashBoard from "./Pages/DashBoard";
import Admin from "./Pages/Admin/Admin";
import AddNewProgram from "./Pages/Admin/AddNewProgram";

function App() {
  return (
    <div className="bg-gray-800  min-h-screen">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Programs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/AddNewProgram" element={<AddNewProgram />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
