import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
// import {LoggingService} from './logging.service';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(fromApp.appReducer),
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService],
})
export class AppModule {
}

// for AoT compilation
// ng build --prod
