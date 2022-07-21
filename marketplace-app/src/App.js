import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import "./App.css";

import Login from "./components/Login";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Categories from "./components/Categories";
import Items from "./components/Items";

import { userNameContext } from "./Context/context";
import SellItems from "./components/SellItems";

function App() {
  const [username, setUsername] = useState("Alexandra14");
  const [items, setItems] = useState([]);

  return (
    <BrowserRouter>
      <userNameContext.Provider value={{ username, setUsername }}>
        <div className="App">
          <Title />
          <Navigation />
          <Routes>
            {/* <Route path="/" element={<Navigation />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/categories"
              element={<Categories items={items} setItems={setItems} />}
            />
            <Route path="/items" element={<Items items={items} />} />
            <Route path="/sell" element={<SellItems />} />
          </Routes>
        </div>
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
