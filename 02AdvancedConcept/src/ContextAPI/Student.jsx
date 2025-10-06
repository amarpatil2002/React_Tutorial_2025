import { useContext } from "react"
import { SubjectContext } from "./CreateContextAPI"

const Student = () => {

    const contextValue = useContext(SubjectContext)

    return(<>
        <h2 style={{backgroundColor:"red" , padding:10}} >Student Component</h2>
        <h4>Subject : {contextValue}</h4>
    </>)
}

export default Student