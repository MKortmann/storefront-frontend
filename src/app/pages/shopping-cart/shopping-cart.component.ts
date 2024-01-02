import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectCartItems } from '../../store/storeBackend.selectors'

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  shoppingCart: any = []

  constructor(private store: Store) {
    this.store.select(selectCartItems).subscribe((value: any) => {
      this.shoppingCart = value
      console.log(this.shoppingCart)
    })
  }

  ngOnInit() {}
}
