import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectCartItems } from '../../store/storeBackend.selectors'
import { ProductComponent } from '../../components/product/product.component'

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  shoppingCart: any = []

  constructor(private store: Store) {
    this.store.select(selectCartItems).subscribe((cart: any) => {
      this.shoppingCart = cart
      console.log(this.shoppingCart)
    })
  }

  ngOnInit() {}
}
