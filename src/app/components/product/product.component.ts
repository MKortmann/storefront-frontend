import { Component } from '@angular/core'

import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { Input } from '@angular/core'
import { DropdownModule } from 'primeng/dropdown'

import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule, ButtonModule, DropdownModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() item: any

  quantities = [{ name: 'City 1' }, { name: 'City 2' }, { name: 'City 3' }]
  selectedQuantity: { name: string } | undefined

  addToCart() {
    alert(`clicked to add to card: ${JSON.stringify(this.selectedQuantity)}`)
  }
}
