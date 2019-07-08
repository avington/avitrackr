import { SharedModule } from './../../shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectPageComponent } from './containers/create-project-page/create-project-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormComponent } from './components/project-form/project-form.component';

const routes: Routes = [
  { path: 'new', component: CreateProjectPageComponent }
]

@NgModule({
  declarations: [CreateProjectPageComponent, ProjectFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
