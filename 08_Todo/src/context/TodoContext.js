import {useContext,createContext} from 'react';

const TodoContext= createContext({
    todos:[{
        id:1,
        todo: "Todo msg",
        completed:false,
    }],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete:()=>{}

})

export  const TodoProvider=TodoContext.Provider;

export default function useTodo (){
return useContext(TodoContext)
}