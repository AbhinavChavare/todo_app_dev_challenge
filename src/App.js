

import { useState } from 'react';
import './App.css';
import { useToDoContext } from './Context/ToDoContext';
import { FaTrash } from "react-icons/fa";
import ABCFooter from './Footer/ABCFooter';

function App() {

  const {listAdd,inputlist,storedata,storeList,active,completed,handekcheck,deletList}=useToDoContext()

  const [show,setShow]=useState("All")

  return (
    <div className="App">
    <div className='container-list'>
     <h2>#todo</h2>
     <section className={`head-todo`} >
      <h3 className={`${show==="All"?"bottom-line":null}`} onClick={()=>setShow("All")} >All</h3>
      <h3 className={`${show==="Active"?"bottom-line":null}`} onClick={()=>setShow("Active")}>Active</h3>
      <h3 className={`${show==="Complete"?"bottom-line":null}`}  onClick={()=>setShow("Complete")} >Completed</h3>
     </section>
     <section  className='todo-add'>
         <input value={listAdd.data}  onChange={(e)=>{inputlist(e)}}
       placeholder='add details'></input>
      <button disabled={listAdd.data?false:true} onClick={()=> {storedata()}}>Add</button>
     </section>
  <section className={`${show==="All"?"todo-list-cont":"disp-none"}`}>
  {
    storeList && storeList.map((ele)=>{
      let id =ele.id
       return(
<div  key={ele.id} className={`${ele.checked===true?"strike check-list":"check-list"} `} >
<input onChange={(e)=>{handekcheck(e,id)}}  checked={ele.checked===true?true:false}  type="checkbox"></input>
<h4 >{ele.data}</h4>
</div>
      )
    })
    
    }
  </section>
  <section className={`${show==="Active"?"todo-list-cont":"disp-none"}`}>
  {
    active && active.map((ele)=>{
      let id =ele.id
      return(
<div  key={ele.id} className="check-list" >
<input onChange={(e)=>{handekcheck(e,id)}}  checked={ele.checked===true?true:false}  type="checkbox"></input>
<h4 >{ele.data} </h4>
</div>
      )
    })
    
    }
  </section>
  <section className={`${show==="Complete"?"todo-list-cont":"disp-none"}`}>
  {
    completed && completed.map((ele)=>{
      let id =ele.id
      return(
<div  key={ele.id} className="check-list completed-data" >
<span className='disp-flex'>
<input onChange={(e)=>{handekcheck(e,id)}}  checked={ele.checked===true?true:false}  type="checkbox"></input>
<h4 className='strike' >{ele.data}</h4> 
</span>
<span onClick={()=>{deletList(id)}}>
<FaTrash className='iconz'/>
</span>
</div>
      )
    })
    
    }
  
  </section>
  </div>
  <ABCFooter/>
    </div>
  );
}

export default App;
