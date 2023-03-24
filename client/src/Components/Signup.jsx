import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router';
import { Box, Button, Input, Select } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState(0);
  const [role, setRole] = useState('');
  console.log(role)
  // const navigate = useNavigate()
  const toast = useToast()
  const handleClick = () => {


    if (!name || !phonenumber || !password || !email) {

      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      </Alert>

      // return
    } else {
      const payload = {
        username: name,
        email: email,
        password: password,
        phonenumber: phonenumber,
        dob: dob,
        role: role,
        
      }
      console.log(payload)
      axios.post("http://localhost:8080/adduser", payload)
        .then((r) => console.log(r))
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })

      setEmail("")
      setName("")
      setPassword("")
      setPhoneNumber("")


      // navigate("/login")
    }




  };


  return (
    <Box bgColor={"white"} padding={"2%"} width={"30%"} margin="auto" alignItems={"center"} height="30%" marginTop={"10%"}  >
      <Input width={"100%"} height={"10%"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter Name' type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <Input width={"100%"} height={"10%"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input width={"100%"} height={"10%"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter PhoneNumber' type="tel" value={phonenumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      <Input width={"100%"} height={"10%"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter PhoneNumber' type="tel" value={dob} onChange={(event) => setDob(event.target.value)} />
      <br />
      <br />

      <Select placeholder='Select Role' onChange={(e) => setRole(e.target.value)} >
        <option value='admin'>Admin</option>
        <option value='explorer'>Explorer</option>

      </Select>
      <br />
      <Input width={"100%"} height={"10%"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      {/* <Input width={"100%"} height={"10%"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Confirm Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
      <br />
      <br />

      <Button margin="auto" marginTop=" 10px" height={"10%"} width={"25%"} onClick={handleClick} type="submit">Login</Button>
    </Box>
  );
}

export default Signup;
