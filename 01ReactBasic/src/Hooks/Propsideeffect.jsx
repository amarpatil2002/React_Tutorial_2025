import { useEffect, useState } from "react"

function Propsideeffect({counter,data}){
    
    useEffect(()=>{
        displayData()
    },[data])

    function displayData(){
        console.log("Show data");
    }

    return(<>
        <h2>Props side effect in Reactjs</h2>
        <h3>Counter : {counter}</h3>
        <h3>Data : {data}</h3>
        
    </>)
}

export default Propsideeffect