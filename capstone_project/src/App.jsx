import { useState } from 'react'
import Login from './components/Login';
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
  <Register/>
  </>
)
}

export default App
