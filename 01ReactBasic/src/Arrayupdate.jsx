import { useState } from "react"

const Arrayupdate = () => {

    const [data , setData] = useState(["ram","sham","amar"])
    const handleData = (name) => {
        const newArry = [...data]
        newArry[newArry.length-1] = name
        setData(newArry)
    }

    
    const [detailData , setDetailData] = useState([
        {name:"amar",age:"23"},
        {name:"ram",age:"33"},
        {name:"sham",age:"28"},
    ])

    const handleDetailData = (age) => {
        const newDetailArry = [...detailData]
        // console.log(newDetailArry[newDetailArry.length-1].age);
        newDetailArry[newDetailArry.length-1].age = age
        setDetailData(newDetailArry)
    }

    return(<>
        <h2>Updating Array in state </h2>
        <input type="text" placeholder="Enter name" onChange={(e) => handleData(e.target.value)} />
        {
            data.map((item,index) => (
                <h3 key={index} >{item}</h3>
            ))
        }

        <hr />
         <input type="text" placeholder="Enter age" onChange={(e) => handleDetailData(e.target.value)} />
        {
            detailData.map((item,index) => (
                <h3 key={index} >{item.name} - {item.age}</h3>
            ))
        }
    </>)
}

export default Arrayupdate