import { useState } from "react"

function Derivedstate(){

    const [users , setUsers] = useState([])
    const [user , setUser] = useState('')

    const handelAddUser = () => {
        setUsers([...users,user])
    }

    const userCount = users.length
    const latestUser = users[users.length-1]
    // const uniqueUser = [new Set(users)].length
    const uniqueUser = new Set(users).size

    return(<>
    <h2>Derived State in React </h2>
    <h3>Total users : {userCount}</h3>
    <h3>Total users : {latestUser}</h3>
    <h3>Total unique users : {uniqueUser}</h3>

    <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Enter user" />
    <button onClick={handelAddUser} >Add User</button>
    {
        users.map((item,index) => (
            <h3 key={index} >{item}</h3>
        ) )
    }
    </>)
}


export default Derivedstate