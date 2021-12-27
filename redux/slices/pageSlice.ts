import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PageState {
  scroll: number
}

const initialState: PageState = {
  scroll: 0,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScroll: (state, action: PayloadAction<number>) => {
      state.scroll = action.payload
    },
  },
})

export const pageSelector = (state: any) => state.page

export const { setScroll } = pageSlice.actions

export default pageSlice.reducer