import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState ={
    todos:[{id:1,text:"Eat food"}]
}

export const todoSlice= createSlice({
    name:'todo',
    initialState,
   reducers:{
    addTodo: (state,action)=>{
        const todo={
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo);
    },
    deleteTodo: (state,action)=>{
        state.todos=state.todos.filter((prev)=>(
            prev.id!==action.payload
        ))
    },
    updateTodo:(state,action)=>{
        state.todos=state.todos.map((val)=>(val.id==action.payload? val.text=action.payload : val))

    }
   }
})

export const {addTodo,deleteTodo}=todoSlice.actions // so that func can be use in other components
export default todoSlice.reducer // so taht store know all the reducers and can update value through these 