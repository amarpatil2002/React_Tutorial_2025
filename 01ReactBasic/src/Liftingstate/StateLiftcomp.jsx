import { useState } from "react"
import Adduser from "./Adduser"
import Displayuser from "./Displayuser"


const StateLiftComp = () => {

    const [inputValue , setInputValue] = useState()

    return(<>
        <Adduser setInputValue={setInputValue} />
        <Displayuser inputValue={inputValue} />
    </>)
}

export default StateLiftComp