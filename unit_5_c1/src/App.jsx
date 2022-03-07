import './App.css';

import {Books} from "./components/books";
import {Pens} from "./components/pen";
import {NoteBooks} from "./components/notebooks";
import {InkPens} from "./components/inkpens";

function App() {
  let obj = {"books":13,"pens":10,"Notebooks":44,"inkpens":78};
  localStorage.setItem("obj",JSON.stringify(obj));
  let sum = 0;
  for(let a in obj){
    sum+=obj[a]
  }
  return (
    <div className="items">
      <div>
      <Books value={13}></Books>
      </div>
      <div>
      <Pens value={10}></Pens>
      </div>
      <div>
      <NoteBooks value={44}></NoteBooks>
      </div>
      <div>
      <InkPens value={78}></InkPens>
      </div>
      <div className='total'>{sum}</div>
    </div>
  );
}

export default App;
