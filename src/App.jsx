import { useState } from 'react'
import Login from './components/Login';
import BankAccountInfo from './components/BankAccountInfo';
import Register from './components/Register';
import MyDocumentDetails from './components/MyDocumentDetails';
import './App.css'
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import DocumentUploadsDisplayed from './components/DocumentUploadsDisplayed';
// import axios from 'axios';s
// import dotenv from 'dotenv';
// dotenv.config();

{/* <a onClick={() => setToken(false); navigate(`/`);}>Log Out</a> */}

function App() {
const navigate = useNavigate();

async function handleClick(){
  setToken(false);
  navigate(`/`);
}

const [documentList, setDocumentList] = useState([])
const [currentComments, setCurrentComments] = useState([])
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [token, setToken] = useState(false);

console.log(token);

return (
  <div id = "container">
    <div id="navbar">
      {token ? <a onClick={handleClick}>Log Out</a>:
      <>
      <Link to="/"> Login </Link>
      <Link to="/register"> Register </Link></>
      }
      <Link to="/BankAccountInfo"> Bank Account Info </Link>
      {token && <Link to="/username"> DocumentUploadsDisplayed </Link>}
      {/* <Link to="/docdetails"> MyDocumentDetails </Link> */}
    </div>
    <Routes>
      <Route path="/" element={<Login setDocumentList={setDocumentList} setUsername={setUsername} setPassword={setPassword} setToken={setToken}/>}/>
      <Route path="/BankAccountInfo" element={<BankAccountInfo />}/>
      <Route path="/Register" element={<Register setDocumentList={setDocumentList} setUsername={setUsername} setPassword={setPassword} setToken={setToken}/>}/>
      <Route path="/username" element={<DocumentUploadsDisplayed documentList={documentList} setCurrentComments={setCurrentComments} username={username} password={password} setDocumentList={setDocumentList}/>}/>
      <Route path="/docdetails/:clientId/:status" element={<MyDocumentDetails currentComments={currentComments} setCurrentComments={setCurrentComments}/>}/>
    </Routes>
  </div>
  )
}

export default App
