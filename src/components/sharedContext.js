import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const authContext = createContext()

const SharedContext = ({children}) =>{
const [dark, setDark] = useState(false)

const handleDark = ()=>{
    setDark(!dark)
    localStorage.setItem('dark-mode', !dark)
}

useEffect(()=>{
    const localDark = JSON.parse(localStorage.getItem('dark-mode'))
    setDark(localDark)
},[])
useEffect(()=>{
    if(dark){
        document.querySelector('html').setAttribute('data-theme', 'dark')
    }
    else{
        document.querySelector('html').setAttribute('data-theme', 'mytheme')
    }
},[dark])

const info = {handleDark, dark}
return(
    <div>
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    </div>
)
}
export default SharedContext