import { useState } from "react"

const Getdata = () => {

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleClick = (e) => {
        const {name,value} =e.target
        setData({...data , value})
    }

    const getData = () => {
        console.log(data);
    }
    return(
        <>
        <h2>Get data</h2>
        <input type="text" onChange={handleClick} name="name" placeholder="Enter Name" /><br /><br />
        <input type="email" onChange={handleClick} name="email" placeholder="Enter Email" /><br /><br />
        <input type="password" onChange={handleClick} name="password" placeholder="Enter Password" /><br /><br />
        <button onClick={getData} >Get Data</button>
        </>
    )
}

export default Getdata