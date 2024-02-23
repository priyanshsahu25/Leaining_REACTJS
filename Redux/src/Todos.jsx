import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from './feature/Todo/TodoSlice';

function Todos() {
    const todos=useSelector((state)=> state.Todos);
    const dispatch=useDispatch();
  return (
    <>
    <div>Todos</div>
    {
        todos.map((val)=>(
            <div key={val.id} >
                   {val.text} 
                   <button onClick={()=> dispatch(removeTodo(val.id))}> X </button>
            </div>
            
        ))
    }
    </>
  )
}

export default Todos