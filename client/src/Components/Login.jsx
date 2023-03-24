import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Box, Button, Input } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Login = () => {
    const toast = useToast()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('')
    console.log('data: ', data);
    const navigate = useNavigate()

    const handleClick = async (e) => {
        // e.preventDefault();
        const payload={
            email:email,
            password:password
        }
        try {
            const response = await axios.post(`http://localhost:8080/user`,payload);
            console.log(response.data);
            setData(response.data)
            setEmail("")
            setPassword('')
            // navigate("/")
            toast({
                title: 'Login  created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Box border="1px solid black" padding={"2%"} width={"30%"}   margin="auto" alignItems={"center"} height="30%" marginTop={"10%"} >
            <Input width={"100%"} height={"30px"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <Input width={"100%"} height={"30px"} marginTop="10px" border={"2px solid grey"} padding="5px" fontSize={"20px"} placeholder='Enter Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <Button  margin="auto" marginTop=" 10px"height={"30px"} width={"25%"} onClick={handleClick} type="submit">Login</Button>
        </Box>
    );
};

export default Login;