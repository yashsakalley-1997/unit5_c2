import { useState } from "react";

export function InkPens(props){
    const [ink_counter,setInks] = useState(props['value']);
    const obj = JSON.parse(localStorage.getItem("obj"));

    const handleChange = (value)=>{
        setInks(ink_counter+value);
        obj['inkpens'] = ink_counter;
        localStorage.setItem("obj",JSON.stringify(obj));
    }


    return(
        <>
            <span>InkPens:</span>
            <button className="addInkpen" onClick={()=>(
                handleChange(1)
            )}>
                +
            </button>
            <button className="remInkpen" onClick={()=>{
                    if(ink_counter >= 1){
                        handleChange(-1)
                    }
                }}>-</button>
            <span className="totalInkpens">
                {ink_counter}    
            </span>
        </>
    )
}