import { Routes } from '@angular/router'
import { ShoppingProductsComponent } from './pages/shopping-products/shopping-products.component'
import { CompletedOrderComponent } from './pages/completed-order/completed-order.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component'
import { UserOrdersComponent } from './pages/user-orders/user-orders.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

export const routes: Routes = [
  { path: '', component: ShoppingProductsComponent },
  { path: 'completed-order', component: CompletedOrderComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'user-orders', component: UserOrdersComponent },
  { path: '**', component: NotFoundComponent },
]
