import { useState } from 'react'
import Login from './components/Login';
import BankAccountInfo from './components/BankAccountInfo';
import Register from './components/Register';
import MyDocumentDetails from './components/myDocumentDetails';
import './App.css'
import { Routes, Route, Link, useParams } from "react-router-dom";
import DocumentUploadsDisplayed from './components/DocumentUploadsDisplayed';
// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
const [documentList, setDocumentList] = useState([])
const [currentComments, setCurrentComments] = useState([])

return (
  <>
  <div>
    <h1>These are my links</h1>
    <div>
      <Link to="/"> Login </Link>
      <Link to="/BankAccountInfo"> Bank Account Info </Link>
      <Link to="/register"> Register </Link>
      <Link to="/docdetails"> MyDocumentDetails </Link>
      <Link to="/username"> DocumentUploadsDisplayed </Link>
    </div>
  </div>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/BankAccountInfo" element={<BankAccountInfo />}/>
    <Route path="/Register" element={<Register setDocumentList={setDocumentList}/>}/>
    <Route path="/docdetails" element={<MyDocumentDetails currentComments={currentComments}/>}/>
    <Route path="/username" element={<DocumentUploadsDisplayed documentList={documentList} setCurrentComments={setCurrentComments}/>}/>
  </Routes>
  </>
)
}

export default App
