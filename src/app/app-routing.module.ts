import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './views/login/login.component';
import { ComponenteComponent } from './views/componente/componente.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AuthGuard } from './needed/guard/auth.guard';
import { PerfilGuard } from './needed/guard/perfil.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component : DashboardComponent,
    data:{
      title: 'Dashboard'

    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'componente',
    component: ComponenteComponent ,
    data: {
      title: 'Compomente'
    }
  },
  { 
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    data: {
      title: 'Home'
    },children: [
    {
      path: 'dashboard',
      canActivate: [PerfilGuard],
      loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'Componente',
      canActivate: [PerfilGuard],
      loadChildren: () => import('./views/componente/componente.module').then(m=> m.ComponenteModule)
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
