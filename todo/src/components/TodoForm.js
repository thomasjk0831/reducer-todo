import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/TodoReducers'



function TodoForm(){
    
    const [task, setTask] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleInput = (e)=>{
       setTask(e.target.value)
      }

  

      return(
          <div className="form-container">
          <div>
                  <input 
                   name = "name"
                   type = "text"
                   value = {task}
                   onChange = {handleInput}>
                  </input>
              <div>
                <button 
                onClick={()=>{dispatch({type: 'ADD_TODO', payload: task})}}>Add to List</button>
              </div>
          </div>
          <div className="clear">
            <button onClick={()=>{dispatch({type: "CLEAR_COMPLETED"})}}>Clear Completed</button>
          </div>
            {
                state.map((task)=>{
                    return <div onClick={()=>{dispatch({type: "TOGGLE_DONE", id: task.id})}}>
                    {task.name}
                </div>
                })
            }
          </div>
      )
  }

export default TodoForm