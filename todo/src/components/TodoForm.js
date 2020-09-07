import React, { useState, useReducer } from 'react'
import Todo from './Todo'

const toDoListData = [
    {
      name: "Wake up",
      id: 111,
      done: false
    },
  
    {
      name: "Eat breakfast",
      id: 112,
      done: false
    },
    {
      name: "Attend lecture",
      id: 113,
      done: false
    },
    {
      name: "Do project",
      id: 114,
      done: false
    },
    {
      name: "Exercise",
      id: 115,
      done: false
    },
    {
      name: "Wash car",
      id: 116,
      done: false
    },
  
  ]


function TodoForm(){
    
    const [list, setList] =  useState(toDoListData)
    const [task, setTask] = useState('')

    const handleInput = (e)=>{
       setTask(e.target.value)
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          setList([...list, 
            {
                name : task,
                id: Date.now(),
                done: false
            }
        ])
        setTask('')
      }
    
      const toggleDone = (id) => {
          const temp = list.map((item)=>{
              if(id === item.id){
                  return {
                      ...item,
                      done : !item.done
                  }
              }
              else
              return item
          })
          setList(temp)
      }

      const clearCompleted = () => {
          const temp = list.filter((item)=>{
              if (item.done === false)
              return item
              else
              return
          })

          setList(temp)
      }

      return(
          <div className="form-container">
          <form onSubmit={handleSubmit}>
              <label>
                  <input 
                   name = "name"
                   type = "text"
                   value = {task}
                   onChange = {handleInput}>
                  </input>
              </label>
              <div>
                <button >Add to List</button>
              </div>
          </form>
          <div className="clear">
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
            {
                list.map((task)=>{
                    return <Todo task = {task} toggleDone = {()=>{toggleDone(task.id)}} />
                })
            }
          </div>
      )
  }

export default TodoForm