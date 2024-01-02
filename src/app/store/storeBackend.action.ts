import { createAction, props } from '@ngrx/store'

export const addToCart = createAction(
  '[Product Component] AddToCart',
  props<{ item: any; quantity: number }>(),
)
