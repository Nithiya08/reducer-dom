import { useReducer, useState } from "react";
let initialState=[]
const reducer=(state,action)=>{
  switch(action.type){
    case 'add':
        return [...state ,{task:action.payload,completed:false}]
        case 'toggle':
            return state.map((todo)=>todo.task===action.payload.task?{...todo,completed:true}:todo)
            case 'delete':
                return state.filter((todo)=>todo.task!=action.payload.task)
  }
}
function Todo(){
    let [state,dispatch]=useReducer(reducer,initialState)
    let [input,setinput]=useState('')
    return(<>
    <b>Enter the Task</b><input type="text" value={input} onChange={(event)=>setinput(event.target.value)}></input>
    <br></br>
    <button onClick={()=>dispatch({type:'add',payload:input})}>ADD</button><br></br>
    <ol>
        {state && state.map((todo)=><li>{todo.task} {todo.completed?'completed':'Not completed'}
        <button onClick={()=>dispatch ({type:'toggle',payload:todo})}>Tooggle</button>
<button onClick={()=>dispatch({type:'delete',payload:todo})}>Delete</button>
        </li>)}
    </ol>
    </>)
}
export default Todo