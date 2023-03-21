import React from 'react'
import axios from "axios"
const UserDetails = () => {
  const [userData, setUserData] = React.useState([])
  console.log(userData)
  const getData = () => {
    axios.get("http://localhost:8080/user")
      .then((res) => setUserData(res.data))
  }
  React.useEffect(() => {
    getData()
  }, [])
  return (<>
    <div style={{textAlign:"center"}} >
      <h1>UserList</h1>
      </div>

    <div>{userData.map((item) =>
      <div style={{ border: "1px solid black" ,width:"40%",margin:"auto",marginTop:"20px",padding:"10px"}} key={item._id}>
        <h6>Name:-{item.name}</h6>
        <h6>Email:-{item.email}</h6>
        {/* <h6>{item.password}</h6> */}
        <h6>Ph_No:-{item.phonenumber}</h6>
      </div>
    )}</div>
  </>
  )
}

export default UserDetails