import { createReducer, on } from '@ngrx/store'
import { addToCart } from './storeBackend.action'

export interface CartState {
  items: { item: object; quantity: number }[]
}

export const initialCartState: CartState = {
  items: [],
}

export const storeBackendReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { item, quantity }) => {
    return { ...state, items: [...state.items, { item, quantity }] }
  }),
)
