import {useEffect, useState} from 'react'
const Route = ({path,children}:any) =>{
    const[currentPath,setCurrentPath]=useState(window.location.pathname)
    useEffect(()=>{
        const onlocationChange=()=>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',onlocationChange)

        return ()=>{
            window.removeEventListener('popstate',onlocationChange)
        }
    },[])
return currentPath === path?
children:null;
}

export default Route