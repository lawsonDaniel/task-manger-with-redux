import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[],
}

export const userinfo = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    SetUser: (state,action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {SetUser } = userinfo.actions

export default userinfo.reducer