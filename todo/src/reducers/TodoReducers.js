export const initialState = [
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

  export const reducer = (state, action) => {
    switch (action.type){
      case "ADD_TODO":
        return [
          ...state,
          {
            name: action.payload,
            id: Date.now(),
            done: false
          }
        ]
      case 'TOGGLE_DONE':
        return state.map((item)=>{
          if(item.id === action.id){
            return {
              ...item,
              done: !item.done
            }
          }
          else
          return item
          
        })
      case 'CLEAR_COMPLETED':
        return state.filter((item)=> {
          if(item.done === false)
          return item
        })
      default:
        return state
    }
  }