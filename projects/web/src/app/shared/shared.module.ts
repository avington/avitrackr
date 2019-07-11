import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultNavbarComponent } from './containers/default-navbar/default-navbar.component';
import { RouterModule } from '@angular/router';
import { SubMenuLoginComponent } from './components/sub-menu-login/sub-menu-login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterSerializer } from './utilities/custom-routing-serializer';
import { SHARED_EFFECTS } from './store/effects';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultNavbarComponent,
    SubMenuLoginComponent,
    InputComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([...SHARED_EFFECTS]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer })
  ],
  exports: [
    RouterModule,
    AngularFireModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    ReactiveFormsModule,

    // components
    DefaultLayoutComponent,
    InputComponent,
    TextAreaComponent
  ]
})
export class SharedModule {}
