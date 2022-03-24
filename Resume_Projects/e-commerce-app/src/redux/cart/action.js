export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export const addToCart = (product) =>{
  return{
    type: ADD_ITEM,
    payload: product
  }
} 

export const DeleteItem = (product) =>{
  return{
    type: DELETE_ITEM,
    payload: product
  }
}