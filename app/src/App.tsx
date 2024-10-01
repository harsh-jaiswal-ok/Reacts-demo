
import './App.css'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [hello, setHello] = useState("");
  const [ahjsd, setAJSHDHello] = useState("");
  

  
  const handleClick = () => {
    if (firstName === '') {
      alert("No name provided");
    } 
    if (lasttName === '') {
      alert("No LastName provided");
    } 
    if (email === '') {
      alert("No Email provided");
    } 
    if (password === '') {
      alert("No password provided");
    } 
    if (password != confirmpassword) {
      alert("No password not equal to confirmpass");
    } 
    
    
  };
  return (
    <>
    <h1>Registration Form </h1>
    <form>
      
      <label>First Name</label>
      <br></br>
      <input value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/>
      <br></br>
      <br></br>
      <label>Last Name</label>
      <br></br>
      <input value = {lasttName} onChange = {(e) => setLastName(e.target.value)}/>      <br></br>
      <br></br>
      <label>Email</label>
      <br></br>
      <input value = {email} onChange = {(e) => setEmail(e.target.value)}/>
      <br></br>
      <br></br>
      <label>Password</label>
      <br></br>
      <input value = {password} onChange = {(e) => setPassword(e.target.value)}/>
      <br></br>
      <br></br>
      <label> Confirm Password</label>
      <br></br>
      <input value = {confirmpassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>
    </form>
    <br></br>
    <button onClick={handleClick}>Submit</button>

    </>
  )
}

export default App
