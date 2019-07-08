import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsComponent } from './containers/projects/projects.component';

@NgModule({
  declarations: [HomePageComponent, ProjectsComponent],
  imports: [CommonModule, SharedModule]
})
export class HomeModule {}
