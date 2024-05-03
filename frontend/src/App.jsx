import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [students, setStudents] = useState([])
  useEffect(()=>{
    axios.get('/api/data')
    .then((response)=>{
      setStudents(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Total Students are {students.length}</p>

      {students.map((student)=>(
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.age}</p>
        </div>

      ))}
    </>
  )
}

export default App
