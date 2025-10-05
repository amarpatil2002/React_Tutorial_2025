import { useState } from "react"
import Propsideeffect from "./Propsideeffect"

function PropsData(){

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    
    return(<>
        <button onClick={() => setCounter(counter+1) } >Counter</button>
        <button onClick={() => setData(data+1) } >Data</button>
        <Propsideeffect counter={counter} data={data} />
    </>)
}

export default PropsData