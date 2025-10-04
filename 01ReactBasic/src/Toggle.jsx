import { useState } from "react"
function Toggle(){

    const [Hideshow , setHideshow] = useState(true)
    const [Multiple , setMultiple] = useState(0)
    return(
        <>
        <h2>Toggle Functionality</h2>
        <button onClick={() => setHideshow(!Hideshow)}>Toggle Button</button>
        {Hideshow ?<h1>Hello World</h1>:null}

        {/* for check multiple condition */}
        {
        Multiple==1?<h3>Condition 1 </h3>
        :Multiple==2?<h3>Condition 2 </h3>
        :Multiple==3? <h3>Condition 3</h3>
        :<h3>Other condition</h3>
        }
        <button onClick={() => setMultiple(Multiple+1)} >Counter</button>
        </>
    )
}

export default Toggle