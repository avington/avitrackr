import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultNavbarComponent } from './containers/default-navbar/default-navbar.component';
import { RouterModule } from '@angular/router';
import { SubMenuLoginComponent } from './components/sub-menu-login/sub-menu-login.component';

@NgModule({
  declarations: [DefaultLayoutComponent, DefaultNavbarComponent, SubMenuLoginComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [DefaultLayoutComponent, RouterModule]
})
export class SharedModule {}
