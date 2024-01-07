import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'

import { provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import { storeBackendReducer } from './store/storeBackend.reducer'
import { provideStoreDevtools } from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideStore({ cart: storeBackendReducer }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
}
