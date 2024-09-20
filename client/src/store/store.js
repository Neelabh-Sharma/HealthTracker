import { configureStore } from '@reduxjs/toolkit'
import getuser from './user/getuser'
export const store = configureStore({
  reducer: {
    user:getuser,
  },
})

