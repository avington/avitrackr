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
    ReactiveFormsModule
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
