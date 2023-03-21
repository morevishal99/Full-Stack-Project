import React from 'react'

import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div style={{display:"flex ",justifyContent:"space-around"}}>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/login">
        <h3 >Login</h3>
      </Link>
      <Link to="/signup">
        <h3 >Signup</h3>
      </Link>
      <Link to="/user">
        <h3 >UserList</h3>
      </Link>
      {/* <Link to="#">
        <h3 data-testid="login-link">User</h3>
      </Link> */}
    </div>
    )
}

export default Navbar