import { createAction, props } from '@ngrx/store'

export const addToCart = createAction(
  '[Product Component] AddToCart',
  props<{ item: any; quantity: number }>(),
)

export const deleteFromCart = createAction(
  '[Product Component] deleteFromCart',
  props<{ itemId: number }>(),
)
