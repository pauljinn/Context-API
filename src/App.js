import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
