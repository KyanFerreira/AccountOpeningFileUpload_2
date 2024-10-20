import { useState } from 'react'
import Login from './components/Login';
import BankAccountInfo from './components/Login';
import Register from './components/Register';
import './App.css'
import { Routes, Route, Link, useParams } from "react-router-dom";
// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
const [count, setCount] = useState(0)

return (
  <>
  <Routes>
    <Route path="/BankAccountInfo" element={<Blue />}/>
    <Route path="/Login" element={<Red />}/>
    <Route path="/Register" element={<Home />}/>
  </Routes>
  <BankAccountInfo/>
  <Login/>
  <Register/>
  </>
)
}

export default App
