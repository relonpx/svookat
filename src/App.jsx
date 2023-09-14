import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
