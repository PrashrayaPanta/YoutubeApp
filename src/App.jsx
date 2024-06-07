import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <h1 className="text-red-500 text-3xl">Hello world</h1> */}
      {/* <Register /> */}
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
