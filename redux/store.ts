import { combineReducers, configureStore } from '@reduxjs/toolkit'

import pageReducer from './slices/pageSlice'

export const store = configureStore({
  reducer: combineReducers({page: pageReducer}),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch