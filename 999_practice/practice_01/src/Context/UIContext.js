import { createContext,useContext } from "react";

const UIContext= createContext({
    str:"This is string",
    addUI: ()=>{},
    deleteUI:()=>{}
});

export const UIContextProvider=UIContext.Provider;
export default function useUI(){
    return useContext(UIContext);
}