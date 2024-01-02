import { Component } from '@angular/core'

import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { Input } from '@angular/core'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule } from '@angular/forms'
import { Store } from '@ngrx/store'
import { selectCartItems } from '../../store/storeBackend.selectors'
import { addToCart } from '../../store/storeBackend.action'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule, ButtonModule, DropdownModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() item: any

  shoppingCart$: Observable<any>
  quantities: number[] = []

  constructor(private store: Store) {
    this.shoppingCart$ = this.store.select(selectCartItems)
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.quantities.push(i)
    }
  }

  selectedQuantity = 0

  addToCart(item: any) {
    console.log('dispatched the action!')
    this.store.dispatch(addToCart({ item, quantity: this.selectedQuantity }))
  }
}
