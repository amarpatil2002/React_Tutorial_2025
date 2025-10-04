import { useState } from 'react'
import Stylecomp from './Stylecomp'

function Conditionalstyle(){

    const [changecolor , setChangecolor] = useState({
        textcolor:"",
        bgcolor:""
    })
    const [toggle , setToggle] = useState(true)

    const compStyle = {
        display:"flex",
        flexWrap:"wrap"
    }

    const handleColor = (textColor,bgColor) => {
        setChangecolor({textcolor:textColor,bgcolor:bgColor})
    }

    
    
    return(<>
        <h1>Conditional Style</h1>
        <button onClick={() => handleColor("black","white")} >Default Color</button>
        <button onClick={() => handleColor("red","aqua")} >Change Color</button>
        <button onClick={() => setToggle(!toggle)} >Flex Wrap</button>
        <div style={{display:toggle?"flex":"block",flexWrap:"wrap" }} >
            <Stylecomp changecolor={changecolor} />
        </div>
    </>)
}

export default Conditionalstyle