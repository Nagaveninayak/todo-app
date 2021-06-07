const initialState = []

const notesReducer = (state = initialState, action)=>{
    switch(action.type){
      case 'SHOW_NOTE': {
        return action.payload
      }
      case 'ADD_NOTE': {
        // console.log('reducer ', action.payload)
        return [...state, action.payload]
      }
      case 'EDIT_NOTE': {
        return state.map((notes)=>{
          if(notes === action.payload){
            return {...notes, ...action.payload}
          }else{
            return {...notes}
          }
        })
      }
      case 'REMOVE_NOTE': {
        return state
      }
      default: {
        return state
      }
    }
}

export default notesReducer