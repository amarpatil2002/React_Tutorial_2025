import { useRef } from "react"

const BasicUseRef = () => {

    const inuptRef = useRef()
    const h1Ref = useRef()
    const toggleRef = useRef()

    const inputHandler = () => {
        inuptRef.current.focus()
        inuptRef.current.style.color = "aqua"
        inuptRef.current.placeholder = "Enter password"
    }

    const h1Handler = () => {
        h1Ref.current.style.color="red"
    }

    const toogleHandler = () => {
        if(toggleRef.current.style.display!="none"){
            toggleRef.current.style.display="none"
        }else{
            toggleRef.current.style.display="inline"
        }
    }
    

    return(<>
    <h2>useRef Component</h2>
    <div>
        <input ref={inuptRef} type="text" placeholder="Enter your name" />
        <button onClick={inputHandler} >On Focus</button>
    </div>
    <div>
        <h1 ref={h1Ref} >Using useref we can directly access the DOM</h1>
        <button onClick={h1Handler} >On Focus</button>
    </div>
    <br />
    <div>
        <h2>Hide and show input field using useRef</h2>
        <button onClick={toogleHandler} >Toogle</button>
        <input ref={toggleRef} type="text" placeholder="Enter email" />
    </div>
    </>)
}


export default BasicUseRef