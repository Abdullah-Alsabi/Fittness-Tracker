import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Programs from "./Pages/Programs";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
function App() {
  return (
    <div className="bg-gray-800  min-h-screen">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Programs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
