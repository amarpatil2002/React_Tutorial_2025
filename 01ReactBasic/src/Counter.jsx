import { useState } from "react"

function Counter(){
    const [count , setCount] = useState(0)

    function handleClick(val){
        if(val == "Increament" && count < 10){
            setCount(count + 1)
        }else if(val == "Decreament" && count > 0){
            setCount(count - 1)
        }
        
    }

    return(<>
    <h2>Counter example</h2>
    <button onClick={() => handleClick("Increament")} >+</button>
    {count}
    <button onClick={() => handleClick("Decreament")}>-</button>
    </>)
}

export default Counter