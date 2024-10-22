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
  <div>
    <h1>These are my links</h1>
    <div>
      <Link to="/BankAccountInfo"> Bank Account Info </Link>
      <Link to="/"> Login </Link>
      <Link to="/register"> Register </Link>
    </div>
  </div>
  <Routes>
    <Route path="/BankAccountInfo" element={<BankAccountInfo />}/>
    <Route path="/" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
  </Routes>
  {/* <BankAccountInfo/>
  <Login/>
  <Register/> */}
  </>
)
}

export default App
