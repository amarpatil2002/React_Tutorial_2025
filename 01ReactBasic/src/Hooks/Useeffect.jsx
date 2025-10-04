import { useEffect, useState } from "react"

function UseEffectHook(){

    const [counter , setConter] = useState(0)
    const [toogle , setToggle] = useState(true)

    useEffect(()=>{
        mountPhase()
    } , [])


    useEffect(()=>{
        updatePhase()
    } , [counter])

    function mountPhase(){
        console.log("mounting phase");
    }

    function updatePhase(){
        console.log("updating phase");
    }

    return(<>
        <h2>useEffect Hook</h2>
        <button onClick={() => setConter(counter+1) } >Counter {counter} </button>
        <button onClick={() => setToggle(!toogle) } >Toggle </button>
        {
            toogle? <MountFun /> :null
        }
    </>)
}

function MountFun(){
        useEffect(()=>{
        return () => {
            console.log("unmounting phase only");
        }
    },[])
    return(<>
    <h2>Unmounting example</h2>
    </>)
}

export default UseEffectHook