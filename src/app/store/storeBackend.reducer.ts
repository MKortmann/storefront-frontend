import { createReducer, on } from '@ngrx/store'
import { addToCart, deleteFromCart } from './storeBackend.action'

/**
 * Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the type.
 */

export interface Item {
  id: number
  name: string
  price: string
  url: string
  description: string
  category: string
}

export interface CartState {
  items: {
    item: Item
    quantity: number
  }[]
}

export const initialCartState: CartState = {
  items: [],
}

export const storeBackendReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { item, quantity }) => {
    const isItemAlreadyInTheCart = state.items.find(
      (cartItem) => cartItem.item.id === item.id,
    )

    if (isItemAlreadyInTheCart) {
      const updatedItems = state.items.map((cartItem) =>
        cartItem.item.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem,
      )

      return { ...state, items: updatedItems }
    }

    return { ...state, items: [...state.items, { item, quantity }] }
  }),
  on(deleteFromCart, (state, { itemId }) => {
    const updatedItems = state.items.filter(
      (cartItem) => cartItem.item.id !== itemId,
    )
    return { ...state, items: updatedItems }
  }),
)
