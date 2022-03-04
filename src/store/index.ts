// import { combineReducers, createStore } from 'redux'
// import { profileReducer } from './Reducers/profileReducer'
// import { dialogsReducer } from './Reducers/dialogsReducer'
// import { usersReducer } from './Reducers/usersReducer'
// import { friendsReducer } from './Reducers/friendsReducer'

// const reducers = combineReducers({
//   profileReducer,
//   dialogsReducer,
//   usersReducer,
//   friendsReducer
// })

// export const store = createStore(reducers)

import { configureStore } from '@reduxjs/toolkit'
import dialogsReducer from './Slice/dialogsSlice'

export default configureStore({
  reducer: {
    dialogs: dialogsReducer,
  },
})