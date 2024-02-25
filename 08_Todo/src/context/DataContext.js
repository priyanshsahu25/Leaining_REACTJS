import { createContext, useContext } from "react";

export const dataContext= createContext({
    str:"This is string",
    addData: ()=>{}
});

export const DataContextProivder=dataContext.Provider;

export default function useData(){
        return useContext(dataContext);
} 