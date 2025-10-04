import { useState } from "react"

function Checkbox(){

    const [data, getData] = useState([])

    const handleClick = (e) => {
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            getData([...data,e.target.value])
        }else{
            getData([...data.filter((item) => item!=e.target.value )])
        }
        

    }

    return(
        <>
        <h2>get checkbox value</h2>
        <input onChange={handleClick} type="checkbox" value="js" id="js" />
        <label htmlFor="js">Javascript</label>
        <br /><br />
        <input onChange={handleClick} type="checkbox" value="py" id="py" />
        <label htmlFor="py">Python</label>
        <br /><br />
        <input onChange={handleClick} type="checkbox" value="node" id="node" />
        <label htmlFor="node">Node</label>
        <br /><br />
        <input onChange={handleClick} type="checkbox" value="dotnet" id="dotnet" />
        <label htmlFor="dotnet">dotnet</label>

        <h2>{data.toString()}</h2>
        </>
    )
}

export default Checkbox