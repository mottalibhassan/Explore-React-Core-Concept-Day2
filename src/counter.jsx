import { useState } from "react"

export default function Count(){
    const[count,setCount] = useState(0);
    const handel = () =>{
        const newCount = count+1;
        setCount(newCount);
    }
    const reduce = () =>{
        const newCount = count-1 ;
        setCount(newCount);
    }
    return(
        <div>
            <h4>Counter :{count} </h4>
            <button onClick={handel}>Add number</button>
            <button onClick={reduce}>reduce number</button>
        </div>
    )
}