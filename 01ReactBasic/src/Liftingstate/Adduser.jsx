import { useState } from "react"

const Adduser = ({setInputValue}) => {

    return(<>
    <h2>Add User</h2>
    <input type="text" onChange={(e) => setInputValue(e.target.value)} />
    <br /><hr />
    </>)
}

export default Adduser