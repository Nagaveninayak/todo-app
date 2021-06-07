export const getById = (notes, id)=>{
    return notes.find((note)=> note._id === id)
}