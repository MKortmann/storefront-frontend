import { Component } from '@angular/core'
import { ProductService } from '../../services/storebackend/product.service'
import { ProductComponent } from '../../components/product/product.component'

@Component({
  selector: 'app-shopping-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shopping-products.component.html',
  styleUrl: './shopping-products.component.scss',
})
export class ShoppingProductsComponent {
  products: any = []
  constructor(private productService: ProductService) {}

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
  }
}
