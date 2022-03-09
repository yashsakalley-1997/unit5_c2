import { useState } from "react";

export function Pens({value,fn})
{
    const [pen_counter,setPens] = useState(value);

    const handleChange = (value)=>{
        setPens(pen_counter+value);
    }


    return(
        <>
            <span>Pens:</span>
            <button className="addPen" onClick={()=>{
                fn(1)
                handleChange(1)
            }}>
                +
            </button>
            <button className="remPen" onClick={()=>{
                    if(pen_counter >= 1){
                        fn(-1)
                        handleChange(-1)
                    }
                }}>-</button>
            <span className="totalPens">
                {pen_counter}    
            </span>
        </>
    )
}