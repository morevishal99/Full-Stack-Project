import React from 'react'

const Home = () => {
    const [data, setdata] = React.useState([]);
    console.log(data)
    const getData = () => {
        fetch("http://localhost:4000/data")
            .then((r) => r.json())
            .then((r) => setdata(r))
            .catch((e) => console.log(e))
    }
    React.useEffect(() => {
        getData()
    }, []);
    return (
        <div> 

            <div>{data.map((item)=> <h1>{item.name}-{item.city}</h1>)}</div>
        </div>
       
       
    )
}

export default Home