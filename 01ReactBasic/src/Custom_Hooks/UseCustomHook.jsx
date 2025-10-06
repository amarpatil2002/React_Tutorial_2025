import useToggle from "./useToggle"

const UseCustomHook = () => {
    const [toggle,setToggle] = useToggle(true)
    return(<>
        <h2>Create custom Hook</h2>
        <button onClick={setToggle} >Toggle Button</button>
        {
            toggle?<h3>This is a Custom Hook</h3>:null
        }
    </>)
}

export default UseCustomHook