import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectCartItems } from '../../store/storeBackend.selectors'
import { ProductComponent } from '../../components/product/product.component'
import { LocalStorageService } from '../../services/local-storage.service'
import { addToCart } from '../../store/storeBackend.action'

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  shoppingCart: any = []

  constructor(
    private store: Store,
    private localStorageService: LocalStorageService,
  ) {
    this.store.select(selectCartItems).subscribe((cart: any) => {
      // if (this.shoppingCart.length === 0) {
      //   this.shoppingCart = this.localStorageService.getItem('shoppingCart');

      //   this.shoppingCart.forEach((item: any) => {
      //     this.store.dispatch(addToCart(item));
      //   })

      // } else {
      this.shoppingCart = cart
      // }
      console.log(this.shoppingCart)
    })
  }

  ngOnInit() {}
}
