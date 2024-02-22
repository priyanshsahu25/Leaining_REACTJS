import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/ThemeContxet";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";

function App() {
 
const[themeMode,setThemeMode]=useState("light");
function lightTheme(){
  setThemeMode("light");
}
function darkTheme(){
  setThemeMode("dark");
}
useEffect(()=>{
  let change= document.querySelector('html');
  change.classList.remove("light","dark");
  change.classList.add(themeMode);

},[themeMode])
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
