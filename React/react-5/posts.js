const redux = require('redux')
const reduxLogger = require('redux-logger')

const { createStore, combineReducers, applyMiddleware } = redux
const { createLogger } = reduxLogger
/**************************************** */
const ADD_POST = 'ADD_POST'
const INCREMENT_FOLLOWER_COUNT = 'INCREMENT_FOLLOWER_COUNT'

const addPost = (postName) => {
  return { type: ADD_POST , payload: postName }
}

const incrementFollowerCount = () => {
  return { type: INCREMENT_FOLLOWER_COUNT }
}


/**************************************** */
const postState = {
  posts: [],
}

const postReducer = (state = postState, action) => {
  switch(action.type){
    case ADD_POST: 
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }

    default: return state
  }
}

const followerState = {
  followers : 0,
}

const followerReducer = (state = followerState, action) => {
  switch(action.type){

    case INCREMENT_FOLLOWER_COUNT:
      return {
        ...state,
        followers: state.followers + 1
      }

    default: return state
  }
}

const rootReducer = combineReducers({
  post : postReducer,
  follower : followerReducer,
})

// Store
const store = createStore(rootReducer, applyMiddleware(createLogger()))
const unsubscribe = store.subscribe(() => console.log('Subscribe'))
store.dispatch(addPost('Mrunal'))
store.dispatch(incrementFollowerCount())
store.dispatch(addPost('Dethekar'))
unsubscribe()




















// Reducer
// 1. Initial State
// 2. Actions and corresponding updates 
