import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';

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
    {path:'profile', component: Profile}
];
