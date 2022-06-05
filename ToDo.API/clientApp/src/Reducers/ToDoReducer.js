const initialState = {
    ToDoListArray: []
}

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE":
            { console.log(action.id);
                return {
                    ...state,
                    ToDoListArray: state.ToDoListArray.filter((item) => item.Id != action.id)
                };
            }
        case "NEWTODO":
            {
               state.ToDoListArray.push(action.contact);
               return {
                    ...state,
                    ToDoListArray: state.ToDoListArray
                };
            }
         case 'ALL_TODO_LOADED':
            return{
                ...state,
                ToDoListArray: action.payload
            }
        default:
            return state;
    }
}

export default ToDoReducer;