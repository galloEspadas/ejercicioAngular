import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteComponent } from './componente.component';

const routes: Routes = [
  {
    path: '',
    component: ComponenteComponent,
    data: {
      title: 'Componente'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteRoutingModule {}
