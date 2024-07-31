import {useReducer, useState} from 'react'
let initialState={count:0}
const reducer=(state,action)=>{//action is on object with a property 'type'
    switch(action.type){
    case 'increment':
        return {count:state.count+1}//increment the state count,updating the count value by 1
        case'decrement':
        return {count:state.count-1}//decrement the state count
        case 'IncrementByInput':
            return {count:state.count + action.payload}
            case 'DecrementByInput':
                return {count:state.count - action.payload}
        default:
            return {count:state.count} 
    }
}


function Counter(){
    let [state,dispatch]=useReducer(reducer,initialState)
    let [input,setinput]=useState()
    return(<>
    <b>Enter value</b><input value={input} onChange={(event)=>setinput(event.target.value)}></input><br></br>
<button onClick={()=>dispatch({'type':'increment'})}>Increment</button>
<b>Count:{state.count}</b>
<button onClick={()=>dispatch({'type':'decrement'})}>Decrement</button><br></br>
<button onClick={()=>dispatch({'type':'IncrementByInput' ,'payload':Number(input)})}>IncrementByInput</button><br></br>
<button onClick={()=>dispatch({'type':'DecrementByInput','payload':Number(input)})}>DecrementByInput</button>

    </>)
}
export default Counter