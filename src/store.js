import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './redux/loaderSlice'
import alertSlice from './redux/alertSlice'


export default configureStore({
    reducer: {
        loader: loaderReducer,
        alert: alertSlice
    },
  })