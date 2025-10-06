import { useState } from 'react'
import College from './ContextAPI/College'
import { SubjectContext } from './ContextAPI/CreateContextAPI'

function App() {
const [subject, setSubject] = useState("Maths")

console.log(subject);

  return(<>
  <SubjectContext.Provider value={subject} >
    <select defaultValue={subject} onChange={(e) => setSubject(e.target.value)} name="subject" id="">
      <option value="Maths">Maths</option>
      <option value="Science">Science</option>
      <option value="Biology">Biology</option>
      <option value="Physics">Physics</option>
    </select>
    <College />
  </SubjectContext.Provider>
  </>)
}

export default App
