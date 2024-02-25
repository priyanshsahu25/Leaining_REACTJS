import { createContext,useContext } from "react";

const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Eat food",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete: (id)=>{}
});

export const TodoProvider=todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}


