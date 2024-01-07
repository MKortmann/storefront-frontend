import { Injectable } from '@angular/core'
import { Actions, ofType } from '@ngrx/effects'
import { tap, withLatestFrom } from 'rxjs/operators'
import { LocalStorageService } from '../services/local-storage.service'
import { Store, select } from '@ngrx/store'
import { selectCartItems } from '../store/storeBackend.selectors'

@Injectable()
export class PersistenceMiddleware {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store,
  ) {
    console.log('PersistenceMiddleware initialized')
    // this.actions$.pipe(ofType('AddToCart')).subscribe(() => this.persistState())
    this.actions$
      .pipe(
        ofType('AddToCart'),
        withLatestFrom(this.store.pipe(select(selectCartItems))),
      )
      .subscribe(([action, state]) => {
        this.localStorageService.saveState('shoppingCart', state)
      })
  }

  // private persistState(): void {
  //   this.store.select(selectCartItems).subscribe((state: any) => {
  //     this.localStorageService.saveState('shoppingCart', state)
  //   })
  // }
}
