import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'

const reducers={
    users: userSlice.reducer
}
export const Store = configureStore({reducer: reducers})