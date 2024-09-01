## Todo app
this project contains a simple todo application with the following features :

**BACKEND**

API ROUTES:-

- anyone can create a todo -> post @ /todo
- anyone can see their existing todos -> get @ /todos
- anyone can mark a todo as done -> put @ /completed
- anyone can delete a todo -> delete @ /remove

MIDDLEWARES:-

- inbuilts -> express.json(),cors()
- validation -> using zod
- global catch

SCHEMA:-

Todo: {
    title : String,
    description : String,
    done : Boolean
}

**FRONTEND**

COMPONENTS:-

- CreateTodo -> component for adding a new todo, uses useRef and props
- Todo -> individual todo as a card component, uses useState and props
- App -> final app that is rendered, renders todo array, uses useState,useEffect 



