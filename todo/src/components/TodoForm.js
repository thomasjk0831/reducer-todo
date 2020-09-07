import React, { useState, useReducer, useEffect } from 'react'
import { initialState, reducer } from '../reducers/TodoReducers'



function TodoForm(){
    
    const [task, setTask] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleInput = (e)=>{
       setTask(e.target.value)
      }


    const handleSubmit = () => {
    dispatch({type: 'ADD_TODO', payload: task})
    setTask('')
    }
    

      return(
      <div className="background">
         <div className="mainC">
            <div className="interfaceC">
               <input 
                   name = "name"
                   type = "text"
                   value = {task}
                   onChange = {handleInput}>
                  </input>
               <div>
               <button className="add" onClick={handleSubmit}>Add to List</button>
                <button className="clear" onClick={()=>{dispatch({type: "CLEAR_COMPLETED"})}}>Clear Completed</button>
               </div>
            </div>

            <div className="tasks">
            {
                state.map((task)=>{
                    return <div className="task" style = {task.done?{textDecoration : "line-through"}: null}
                    onClick={()=>{dispatch({type: "TOGGLE_DONE", id: task.id})}}>
                    
                    {task.name}
                        
                    
                </div>
                })
            }
            </div>
            
         </div>
      </div>
        
      )
  }

export default TodoForm