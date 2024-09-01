
import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todo } from './components/Todo'

function App() {
  const [todos,settodos] = useState([]);
  const [newy,setnewy] = useState(1);
  
  useEffect(()=>{
    fetch("http://localhost:3000/todos").then((res)=>{
      res.json().then((res)=>{
        settodos(res.data)
      })
    })
  },[newy])

  return(
    <div>
      <CreateTodo setnewy = {setnewy}/>
      {todos.map((ele)=>{
        return <div key = {ele._id}>
            <Todo todo={ele} setnewy = {setnewy}/>
          </div>
      })}
      
    </div>
  )
}

export default App
