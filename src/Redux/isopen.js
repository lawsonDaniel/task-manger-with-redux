import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const isopen = createSlice({
  name: 'isopen',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = isopen.actions

export default isopen.reducer