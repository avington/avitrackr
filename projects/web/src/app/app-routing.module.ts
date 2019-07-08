import { AuthCheckGuard } from './shared/guards/auth-check.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/containers/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'project',
    canLoad: [AuthCheckGuard],
    loadChildren: () => import('./modules/project/project.module')
      .then(m => m.ProjectModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
