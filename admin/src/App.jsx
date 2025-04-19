import { React, useEffect, useState } from "react";
import {ToastContainer}  from "react-toastify"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./componets/NavBar";
import SlideBar from "./componets/slideBar";
import AddItem from "./pages/addItem";
import Orders from "./pages/Orders";
import List from "./pages/list";
import Login from "./componets/Login";


export const backendUrl=import.meta.env.VITE_BACKEND_URL;
export const currency="$";

function App() {
const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
  useEffect(()=>{
    localStorage.setItem("token",token)
  },[token])
  
  return (
    <>
     <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken}/>
      ) : (
        <div>
          <NavBar setToken={setToken} />
          <div className="flex gap-2 mt-24">
            <SlideBar />
            <Routes>
              <Route path="/add" element={<AddItem token={token} />} />
              <Route path="/orders" element={<Orders token={token}/>} />
              <Route path="/list" element={<List token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
