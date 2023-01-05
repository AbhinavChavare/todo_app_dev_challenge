import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ToDoReducer";

const ToDoContext=createContext()

const initialState={
    listAdd:{data:"",
    id:"",
    checked:""},
    storeList:[],
    completed:[],
    active:[],

}

const ToDoContextProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

  useEffect(()=>{
          let localStore=JSON.parse(localStorage.getItem("Token"))
          return(
              dispatch({type: "SET_STORE_LOCAL",payload:localStore}) ,
              dispatch({type:"SET_CHECK-DATA"}),
              dispatch({type:"SET_ACTIVE_DATA"})
              )            
            },[])

const inputlist=(e)=>{
let fname=(e.target.value)
return(
    
    dispatch({ type:"SET_INPUTDATA",payload:fname})
    )
}

const storedata=()=>{
    return(
        dispatch({type:"SET_LOADDATA"}),
        dispatch({type:"SET_ACTIVE_DATA"})
        )
    }

const handekcheck=(e,id)=>{
    let check=e.target.checked
return(

    dispatch({type:"SET_CHECKED",payload:{check,id}}),
    dispatch({type:"SET_CHECK-DATA"}),
    dispatch({type:"SET_ACTIVE_DATA"})
    )
}

const deletList=(id)=>{
    return(
        dispatch({type:"SET_DELETED",payload:id}),
        dispatch({type:"SET_CHECK-DATA"}),
        dispatch({type:"SET_ACTIVE_DATA"})
        )
}
   
useEffect(()=>{
        localStorage.setItem( "Token",JSON.stringify(state.storeList))

    },[state])

return(    
    <ToDoContext.Provider value={{...state,inputlist,storedata,handekcheck,deletList}}>
        {children}
    </ToDoContext.Provider>
)
}

const useToDoContext =()=>{
    return useContext(ToDoContext)
}

export {ToDoContext,ToDoContextProvider,useToDoContext}