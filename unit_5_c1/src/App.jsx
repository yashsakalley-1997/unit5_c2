import './App.css';
import { useState } from 'react';

import {Books} from "./components/books";
import {Pens} from "./components/pen";
import {NoteBooks} from "./components/notebooks";
import {InkPens} from "./components/inkpens";

function App() {
  let obj = {"books":13,"pens":10,"Notebooks":44,"inkpens":78};

  // Sum functionality.
  let init_sum = 0;
  for(let a in obj){
    init_sum+=obj[a]
  }
  let [sum,setSum] = useState(init_sum)

  const sumFunction = (value)=>{
    if(value+sum>=0){
      setSum(value+sum)
    }
  }

  
  return (
    <div className="items">
      <div className='items'>
      <Books value={13} fn={sumFunction}></Books>
      </div>
      <div className='items'>
      <Pens value={10} fn={sumFunction}></Pens>
      </div>
      <div className='items'>
      <NoteBooks value={4} fn={sumFunction}></NoteBooks>
      </div>
      <div className='items'>
      <InkPens value={7} fn={sumFunction}></InkPens>
      </div>
      <div className='total'>{sum}</div>
    </div>
  );
}

export default App;
