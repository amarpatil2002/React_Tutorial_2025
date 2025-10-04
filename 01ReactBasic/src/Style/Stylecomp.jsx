import { useEffect, useState } from "react"

function Stylecomp(prop){
    
    const [data,setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((item) => setData(item))
    },[])

    console.log(prop.changecolor.textcolor);
    return(<>
        {
            data.map((user)=> (
                <ul key={user.id} style={{color:prop.changecolor.textcolor,backgroundColor:prop.changecolor.bgcolor, width:"200px",border:"2px solid black",gap:"10px"}} >
                    <li>{user.id}</li>
                    <li>Name : {user.name}</li>
                    <li>City : {user.address.city}</li>
                    <li>Company : {user.company.name}</li>
                </ul>
            ) )
        }
    </>)
}

export default Stylecomp