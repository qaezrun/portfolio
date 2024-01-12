import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'loaderSlice',
    initialState: {
      value: false,
    },
    reducers: {
        toggleLoader:(state,action) =>{
            state.value = action.payload
        }   
    },
  })
  export const { toggleLoader } = loaderSlice.actions
  export default loaderSlice.reducer