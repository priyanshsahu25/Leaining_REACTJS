 import {createSlice,nanoid} from  '@reduxjs/toolkit';

 export const todoSlice =createSlice({
    name:'todo',
    initialState: {
        todos:[{id:1,text:"Hello"}]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
                state.todos.filter((todo)=>(todo.id !== action.payload ))
                //action
        }
    }
 }) 

 export const {addTodo,removeTodo}= todoSlice.actions;
 export default todoSlice.reducer;