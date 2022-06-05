export const Remove = (id) => {
    return{
        type: "REMOVE",
        id: id
    }
}
export const NewToDo = (newToDo) => {
    return{
        type: "NEWTODO",
        contact: newToDo
    }
}

export const LoadAllToDo = (toDoList) => {
    return{
        type: "ALL_TODO_LOADED",
        payload: toDoList
    }
} 
