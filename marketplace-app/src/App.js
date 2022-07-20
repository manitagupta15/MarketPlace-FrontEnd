import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";

function App() {
  const [username, setUsername] = useState("");

  console.log(username, "<---from app");
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Login username={username} setUsername={setUsername} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
