import { useRef } from "react"
import "../App.css"
export function CreateTodo({setnewy}){
    const title_ref = useRef();
    const desc_ref = useRef();
    async function add(){
        await fetch("http://localhost:3000/todo",{
            headers: {
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({title: title_ref.current.value, description: desc_ref.current.value})
        })
        setnewy(prev=>prev+1);
    }

    return(
        <div id = "createtodo">
            <input type="text" placeholder="title" ref={title_ref}/>
            <input type="text" placeholder="description" ref={desc_ref}/>
            <button onClick = {()=>add()}> add a todo</button>
        </div>
    )
}