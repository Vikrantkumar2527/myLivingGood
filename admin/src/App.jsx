import { React, useEffect, useState } from "react";
import {ToastContainer}  from "react-toastify"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./componets/NavBar";
import SlideBar from "./componets/slideBar";
import AddItem from "./pages/addItem";
import User from "./pages/User";
import List from "./pages/list";
import Login from "./componets/Login";


export const backendUrl=import.meta.env.VITE_BACKEND_URL;
export const currency="₹";

function App() {
const [token, setToken] = useState(localStorage.getItem("admintoken")?localStorage.getItem("admintoken"):"");
  useEffect(()=>{
    localStorage.setItem("admintoken",token)
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
              <Route path="/user" element={<User token={token}/>} />
              <Route path="/list" element={<List token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
