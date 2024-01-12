import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    show: false,
    data:{
        header: '',
        desc: '',
        btntxt: '',
        for: '',
        status: false,
    }
};

export const alertProp = createSlice({
    name: 'ialertProp',
    initialState,
    reducers: {
        setData:(state,action)=>{
            state.data =  { ...state.data, ...action.payload };
        },
        setVisibility:(state,action)=>{
            state.show = action.payload
        }
    },
  })
  export const { setData, setVisibility } = alertProp.actions
  export default alertProp.reducer