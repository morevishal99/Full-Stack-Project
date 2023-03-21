import React, { useState } from 'react';
import axios from "axios"
import { Navigate, useNavigate } from 'react-router';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const navigate=useNavigate()

const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic
    if(!name || !phonenumber || !password || !email){
        alert("enter all data")
    }
   
   const payload={
    name:name,
    email:email,
    password:password,
    phonenumber:phonenumber,
    cart:[]
   }
   
   axios.post("http://localhost:8080/adduser",payload)
   .then((r)=>console.log(r))
   setEmail("")
   setName("")
   setPassword("")
   setPhoneNumber("")
navigate("/lodin")
  };
  

  return (
    <div style={{margin:"20vh 20vh 20vh 20vh",border:"1px solid red",textAlign:"left",gap:"20px"}}>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phonenumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Signup;
