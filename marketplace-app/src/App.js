import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import "./App.css";

import Login from "./components/Login";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Categories from "./components/Categories";

import { userNameContext } from "./Context/context";
import SellItems from "./components/SellItems";
import Basket from "./components/Basket";

function App() {
  const [username, setUsername] = useState("Alexandra14");
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  return (
    <BrowserRouter>
      <userNameContext.Provider value={{ username, setUsername }}>
        <div className="App">
          <Title />
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/categories"
              element={<Categories items={items} setItems={setItems} setBasketItems={setBasketItems} />}
            />
            <Route path="/sell" element={<SellItems />} />
            <Route path="/basket" element={<Basket basketItems={basketItems} setBasketItems={setBasketItems}/>} />
          </Routes>
        </div>
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
