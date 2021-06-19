export const getById = (notes, id)=>{
    return notes.find((note)=> note._id === id)
}

export const getByTask = (tasks, id)=>{
    return tasks.find((task)=> task._id === id)
}