import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectCartItems } from '../store/storeBackend.selectors'
import { LocalStorageService } from './local-storage.service'
import { addToCart } from '../store/storeBackend.action'

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  private initialized = false

  constructor(
    private store: Store,
    private localStorageService: LocalStorageService,
  ) {}

  initialize(): void {
    debugger
    if (this.initialized) {
      return
    }

    this.store.select(selectCartItems).subscribe((cart: any) => {
      const shoppingCart = this.localStorageService.getItem('shoppingCart')

      if (shoppingCart) {
        shoppingCart.forEach((item: any) => {
          this.store.dispatch(addToCart(item))
        })
      }
    })

    this.initialized = true
  }
}
