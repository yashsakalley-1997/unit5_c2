import { useState } from "react";

export function Books({value,fn})
{   
    console.log(fn)
    const [book_counter,setBooks] = useState(value);

    const handleChange = (value)=>{
        setBooks(book_counter+value);
    }

    return(
        <>
            <span>Books:</span>
            <button className="addBook" onClick={()=>{
                fn(1)
                handleChange(1)
            }}>
                +
            </button>
            <button className="remBook" onClick={()=>{
                    if(book_counter >= 1){
                        fn(-1)
                        handleChange(-1)
                    }
                }}>-</button>
            <span className="totalBooks">
                {book_counter}    
            </span>
        </>
    )
}