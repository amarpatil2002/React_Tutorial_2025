import { useRef } from "react"

const Getformdata = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    
    const getData = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return(<>
        <h2>Get form data using useRef hook</h2>
        <form action="" onSubmit={getData} >
            <input ref={nameRef} type="text" placeholder="Enter Name" /><br /><br />
            <input ref={emailRef} type="email" placeholder="Enter email" /><br /><br />
            <input ref={passwordRef} type="password" placeholder="Enter password" /><br /><br />
            <button>Submit</button>
        </form>
    </>)
}

export default Getformdata