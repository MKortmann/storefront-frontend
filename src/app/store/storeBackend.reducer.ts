import { createReducer, on } from '@ngrx/store'
import { addToCart } from './storeBackend.action'

/**
 * Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the type.
 */

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
