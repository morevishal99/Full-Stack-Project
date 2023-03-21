import React from 'react'

const Home = () => {
    const [data, setdata] = React.useState([]);
    console.log(data)
    const getData = () => {
        fetch("http://localhost:8080")
            .then((r) => r.json())
            .then((r) => setdata(r))
            .catch((e) => console.log(e))
    }
    React.useEffect(() => {
        getData()
    }, []);
    return (
        <div style={{ margin: "20% 25%", color: "teal" }}>
            <h1>{data.msg}</h1>
        </div>


    )
}

export default Home