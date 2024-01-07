import { Action, ActionReducer, INIT, UPDATE } from '@ngrx/store'
import { LocalStorageService } from '../services/local-storage.service'

export function localStorageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>,
  storageService: LocalStorageService,
): ActionReducer<S, A> {
  return (state: S | undefined, action: A): S => {
    console.log('localStorageMetaReducer called with action:', action)

    const newState = reducer(state, action)

    // Handle the INIT action to load state from local storage
    debugger
    if (action.type === INIT) {
      const savedState = storageService.getItem('shoppingCart')
      return savedState !== null ? savedState : newState
    }

    // Handle other actions and save the state to local storage
    if (action.type !== UPDATE) {
      storageService.saveState('shoppingCart', newState)
    }

    return newState
  }
}
