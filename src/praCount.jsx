import { useState } from "react"

export default function CountTable(){
    const [count,setCount] = useState(0);
    const incress = () =>{
        const newCount = count +1;
        setCount(newCount);
    }
    const dicress = () =>{
        const newCount = count-1;
        setCount(newCount);
    }
    const Style = {
        border:'2px solid red',
        margin:'5px',
        padding:'5px',
        borderRadius:'30px',
        backgroundColor:'gray'
    }
    return(
        <div style={Style}>
            <h4>Count : {count}</h4>
            <button onClick={incress}>Add Number</button>
            <button onClick={dicress}>Remove Number</button>
        </div>
    )
}