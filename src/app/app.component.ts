import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { Store } from '@ngrx/store'
import { selectCartItems } from './store/storeBackend.selectors'
import { addToCart } from './store/storeBackend.action'
import { take } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('Start: initializationService')
    this.store
      .select(selectCartItems)
      .pipe(take(1))
      .subscribe((cart: any) => {
        const shoppingCart: any = window.localStorage.getItem('shoppingCart')

        if (shoppingCart) {
          const cart = JSON.parse(shoppingCart)
          cart.forEach((item: any) => {
            this.store.dispatch(addToCart(item))
          })
        }
      })
  }
}
