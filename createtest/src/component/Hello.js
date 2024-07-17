import s from './Hello.module.css'
import { useState } from 'react'



export default function(){
    const [name, setName] = useState("하준")

    function showname(e){
        setName(name === "하준" ? "준하":"하준")
    }


    return <div>
        <h1 >{name}</h1>
        <button onClick={showname}>btn1</button>
    </div>
}