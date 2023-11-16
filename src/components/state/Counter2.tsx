//adding extra reset buttin and managing its type declaration 
import React,{useReducer} from 'react'

const initialState ={
    count:0
}

type CounterState={
count:number
}

type UpdateAction ={
    type:'increment' | 'decrement'
    payload:number
}

type ResetAction={
    type:'reset'
}
type CounterAction= UpdateAction | ResetAction
function reducer (state:CounterState,action:CounterAction){ //we need to provide types to the state and action
switch(action.type){
    case'increment':
    return{count: state.count+action.payload}
    case'decrement':
    return{count: state.count-action.payload}
    case'reset':
    return initialState
    default:
    return state;
}
}
const Counter2 = () => {
    const[state,dispatch]=useReducer(reducer, initialState)
  return (
    <div>
        Count:{state.count}
        <button onClick={()=>dispatch({type:'increment' ,payload:10})}>
            increment 10
        </button >
        <button onClick={()=>dispatch({type:'decrement' ,payload:10})}>
            decrement 10
        </button>
        <button onClick={()=>dispatch({type:'reset'})}>
            reset
        </button>
    </div>
  )
}

export default Counter2