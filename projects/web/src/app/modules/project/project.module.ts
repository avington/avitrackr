import { SharedModule } from './../../shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectPageComponent } from './containers/create-project-page/create-project-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'new', component: CreateProjectPageComponent }
]

@NgModule({
  declarations: [CreateProjectPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
