import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Programs from "./Pages/Programs";
function App() {
  return (
    <div className="bg-gray-800  min-h-screen">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Programs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
