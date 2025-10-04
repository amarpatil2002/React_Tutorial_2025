import { useEffect, useState } from "react"

function FetchAPIdata(){

    const [mount, setMount] = useState(true)

    return(<>
        <h1>User Data</h1>
        <button onClick={() => setMount(!mount) } >UnMount</button>
        {mount ? <ShowData />:null}
    </>)
}

function ShowData(){

    const [data , setData] = useState([])

    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((item) => setData(item))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
        return () => {
            console.log("Unmout phase calling");
        }
    } , [])

    return   data.map((users,index) => (
                <ul key={index}>
                    <li>{users.id}</li>
                    <li>{users.name}</li>
                    <li>{users.username}</li>
                    <li>{users.email}</li>
                </ul>
            ))
        
}

export default FetchAPIdata

