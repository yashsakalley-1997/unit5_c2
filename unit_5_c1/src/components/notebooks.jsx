import { useState } from "react";

export function NoteBooks(props)
{
    const [note_counter,setNotes] = useState(props['value']);

    const handleChange = (value)=>{
        setNotes(note_counter+value);
    }


    return(
        <>
            <span>Notebooks:</span>
            <button className="addNotebook" onClick={()=>(
                handleChange(1)
            )}>
                +
            </button>
            <button className="remNotebook" onClick={()=>{
                    if(note_counter >= 1){
                        handleChange(-1)
                    }
                }}>-</button>
            <span className="totalNotebooks">
                {note_counter}    
            </span>
        </>
    )
}