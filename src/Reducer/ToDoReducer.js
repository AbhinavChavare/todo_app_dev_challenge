import React from 'react'

const ToDoReducer = (state,action) => {

    switch(action.type){
case "SET_INPUTDATA":
    return{
        ...state,listAdd:{data:action.payload,id:new Date().getTime().toString(),checked:"false"}
    }

case "SET_LOADDATA":return{
    ...state,listAdd:{data:""},storeList:[...state.storeList,state.listAdd]
}

case "SET_CHECKED":
    let checklistdata=state.storeList.filter((ele)=>{
        return(
            ele.id ===action.payload.id
            )
        })

        checklistdata[0].checked=action.payload.check

        return{
        ...state,
     }
case "SET_CHECK-DATA":
    let dataComplete=state.storeList.filter((ele)=>{
        return(
            ele.checked===true
            )
        })
        return{
        ...state,completed:[...dataComplete]
     }
case "SET_ACTIVE_DATA":
    let dataActive=state.storeList.filter((ele)=>{
        return(
            ele.checked===false|| ele.checked==="false"
            )
        })
        return{
        ...state,active:[...dataActive]
     }

case "SET_DELETED":
    let reameinindData=state.storeList.filter((ele)=>{
        return(
            ele.id!=action.payload
            )
        })
        return{
        ...state,storeList:[...reameinindData]
     }

    case "SET_STORE_LOCAL":

        return{
            ...state,storeList:[...action.payload]
        }


default:return{
    ...state
}

    }
 
}

export default ToDoReducer
