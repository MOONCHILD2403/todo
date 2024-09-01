import { useState } from "react"
import "../App.css"
export function Todo({setnewy,todo}){
    const [completed,setCompleted] = useState(todo.done);
    
    async function remove_todo(){
        await fetch("http://localhost:3000/remove",{
            headers: {
                'Content-Type': 'application/json'
              },
              method: "DELETE",
              body: JSON.stringify({title: todo.title, description: todo.description})
        })
        setnewy(prev=>prev-1);
    }

    return(
        <div className="todo">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <button onClick={()=>setCompleted(prev=>!prev)}>{completed == true?"completed":"mark as complete"}</button>
        <button onClick={()=>remove_todo()}>{"delete"}</button>
        </div>
    )  

    
}