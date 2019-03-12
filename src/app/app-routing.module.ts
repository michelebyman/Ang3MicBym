import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingleUSerComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {
  RouteguardService as RouteGuard
} from './routeguard.service';

// sets paths to different components and sets route-guards, the paths are shown in the url 
const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [RouteGuard]
  },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user/:id', component: SingleUSerComponent,
    canActivate: [RouteGuard],
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
