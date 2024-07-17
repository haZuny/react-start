import s from './Hello.module.css'

function showname(e){
    console.log(e.target.text)
}

export default function(){
    return <div>
        <h1 onClick={showname}>hello component1</h1>
        <button onClick={showname}>btn1</button>
        <button>btn2</button>
        <input onChange={showname}></input>
    </div>
}