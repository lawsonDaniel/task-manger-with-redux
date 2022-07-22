import { configureStore } from '@reduxjs/toolkit'
import  IsOpenReducer  from './isopen'
import FormReducer from './form'
import UserInfoReducers from './UserInfo'

export const store = configureStore({
  reducer: {
    isopen : IsOpenReducer,
    form: FormReducer,
    userinfo: UserInfoReducers
  },
})