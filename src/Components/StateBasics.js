import React, { useState } from "react";

const StateBasics = ()=>{
    let[count,setCount] = useState(100)

    function increase(){
        setCount(count+1)
    }

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increase}>Increase</button>

            <button onClick={()=>setCount(count-1)}>Decrease</button>
            
            <button onClick={()=>setCount(100)}>Reset</button>
        </div>

    )
}

export default StateBasics
