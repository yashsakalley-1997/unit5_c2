import { useState } from "react";

export function Pens(props)
{
    const [pen_counter,setPens] = useState(props['value']);

    const handleChange = (value)=>{
        setPens(pen_counter+value);
    }


    return(
        <>
            <span>Pens:</span>
            <button className="addPen" onClick={()=>(
                handleChange(1)
            )}>
                +
            </button>
            <button className="remPen" onClick={()=>{
                    if(pen_counter >= 1){
                        handleChange(-1)
                    }
                }}>-</button>
            <span className="totalPens">
                {pen_counter}    
            </span>
        </>
    )
}