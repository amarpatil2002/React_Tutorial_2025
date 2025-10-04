import { useState } from "react"

function Radiobutton(){

    const [gender , setGender] = useState('male')
    const [city , setCity] = useState("Pune")
    console.log(gender);
    return(
        <>
            <div className="radio">
                <h2>Radio Button</h2>
                <input type="radio" checked={gender=="male"} onChange={(e) => setGender(e.target.value)} name="gender" value={"male"} id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" onChange={(e) => setGender(e.target.value)} name="gender" value={"female"} id="female" />
                <label htmlFor="female">Female</label>
                <p>Selected value : {gender}</p>
            </div>

            <div className="dropdown">
                <h2>Dropdown menue</h2>
                <select defaultValue={"Pune"} onChange={(e) => setCity(e.target.value)} name="city" id="city">
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Mumbai"}>Mumbai</option>
                    <option value={"Benglore"}>Benglore</option>
                    <option value={"Pune"}>Pune</option>
                </select>
                <p>Selected value : {city} </p>
            </div>
        </>
    )
}

export default  Radiobutton