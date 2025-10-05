import { useState } from "react"

const Objectupdate = () => {

    const [data , setData] = useState({
        name:"Amarjit",
        address:{
            city:"Pandharpur",
            pincode:"413304"
        }
    })

    const handleData = (val) => {
        setData((pre) => ({...pre,name:val}) )

    }

    const handleCity = (city) => {
                setData((prev) => ({
            ...prev,
            address:{
                ...prev.address,
                city:city
            }
        }))
    }

    return(<>
        <h2>Updating objects in state </h2>
        <input type="text" onChange={(e) => handleData(e.target.value)} />
        <input type="text" onChange={(e) => handleCity(e.target.value)} />
        <h3>City : {data.name} </h3>
        <h3>City : {data.address.city} </h3>
        <h3>City : {data.address.pincode} </h3>
    </>)
}

export default Objectupdate