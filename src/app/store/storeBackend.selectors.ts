import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CartState } from './storeBackend.reducer'

export const selectCartState = createFeatureSelector<CartState>('cart')

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items,
)
