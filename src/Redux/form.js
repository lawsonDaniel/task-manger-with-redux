import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    description : '',
    date:'',
    time:''
  }
}

export const form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    AddDescripton: (state,actions) => {
      state.value.description = actions.payload
    },
    AddDate: (state,actions) => {
        state.value.date = actions.payload
      },
      Addtime: (state,actions) => {
        state.value.time = actions.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { AddDescripton,AddDate,Addtime } = form.actions

export default form.reducer