import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('')
    console.log('data: ', data);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/user?email=${email}&&password=${password}`);
            console.log(response.data);
            setData(response.data)
            localStorage.setItem("userData", JSON.stringify(response.data))
            setEmail("")
            setPassword('')
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div style={{ margin: "20vh 20vh 20vh 20vh", border: "1px solid red", textAlign: "left", gap: "20px" }}>
            <form onSubmit={handleSubmit}>
                <label >
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label >
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;