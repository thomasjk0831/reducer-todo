import React from 'react'

function Todo({task, toggleDone}){
    return(
        <div onClick={toggleDone}>
            {task.name}
        </div>
    )
}

export default Todo