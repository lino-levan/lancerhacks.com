import { useAppSelector, useAppDispatch } from '../redux/hooks'

import { decrement, increment } from '../redux/slices/exampleSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // add rendering logic
}