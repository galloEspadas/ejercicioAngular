import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponenteComponent } from './componente.component';
import { ComponenteRoutingModule } from './componente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponenteRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ ComponenteComponent ]
})
export class ComponenteModule { }
