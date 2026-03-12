import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path:'', 
        loadComponent:()=>import('./pages/home/home').then((c)=>c.Home)
    },
    {
        path:'about', 
        loadComponent:()=> import('./pages/about/about').then((c)=>c.About),
    },
    // {path:'about', component:About},
    {path:'about/:name', component:About},
    {path:'about/:name/:age', component:About},
    {path:'profile', component: Profile},
    {
        path:'reactive-form', 
        component: ReactiveForm,
        canActivate:[authGuard]
    },
];
