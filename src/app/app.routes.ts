import { Routes } from '@angular/router';
import { authenticationGuard } from './Core/Guards/authentication.guard';

export const routes: Routes = [
    {'path':'',redirectTo:'login',pathMatch:'full'},
    {'path':'login',loadComponent:()=>import('./Components/login/login.component').then((m)=>m.LoginComponent),title:'Login'},
    {'path':'Home',canActivate:[authenticationGuard],loadComponent:()=>import('./Components/home/home.component').then((m)=>m.HomeComponent),title:'Home'}

];
