import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/storebackend/product.service'
import { ProductComponent } from '../../components/product/product.component'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  productId: number | undefined
  item: any

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id']
      this.productService.getProduct(this.productId).subscribe({
        next: (res: any) => {
          console.log(res)
          this.item = res
        },
        error: (error: any) => {
          alert('Error!')
        },
      })
    })
  }
}
