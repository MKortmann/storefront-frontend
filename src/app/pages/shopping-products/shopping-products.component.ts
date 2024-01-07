import { Component } from '@angular/core'
import { ProductService } from '../../services/storebackend/product.service'
import { ProductComponent } from '../../components/product/product.component'
import { Store } from '@ngrx/store'
import { addToCart } from '../../store/storeBackend.action'
import { selectCartItems } from '../../store/storeBackend.selectors'
import { LocalStorageService } from '../../services/local-storage.service'

@Component({
  selector: 'app-shopping-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shopping-products.component.html',
  styleUrl: './shopping-products.component.scss',
})
export class ShoppingProductsComponent {
  products: any = []

  constructor(
    private productService: ProductService,
    private store: Store,
    private localStorageService: LocalStorageService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res
        console.log(this.products)
      },
      error: (error: any) => {
        console.error(`Error fetching products: ${error}`)
      },
    })

    // this.store.select(selectCartItems).subscribe((cart: any) => {
    //   if (this.shoppingCart.length === 0) {
    //     this.shoppingCart = this.localStorageService.getItem('shoppingCart')

    //     this.shoppingCart.forEach((item: any) => {
    //       this.store.dispatch(addToCart(item))
    //     })
    //   }
    // })
  }
}
