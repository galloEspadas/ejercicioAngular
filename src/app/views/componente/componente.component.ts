import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {
  array = [ { value: 1 , name: 'CampoUno'}, { value: 2 , name: 'CampoDos'}, { value: 3 , name: 'CampoTres'}, { value: 4 , name: 'CampoCuatro'}, { value: 5 , name: 'CampoCinco'}, { value: 6 , name: 'CampoSeis'}, ];
  compForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.buildForm();
   }

  ngOnInit() {

  }


  buildForm() {
    this.compForm = this.fb.group({
      value: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  submit(){

    const value = this.compForm.get('value').value;
    const name = this.compForm.get('name').value;

    console.log(this.array);

    console.log(value, name);
    
  }

  submit2(){
    console.log(this.array);
    for (let i = 0; i < this.array.length; i++) {
      let nombre = this.array[1].name;
      let value = this.array[1].value;
    }
  }

  inicio(){
    this.router.navigate(['/dashboard']);
  }

  componente(){
    this.router.navigate(['/componente']);
  }

  salir(){
    this.router.navigate(['/login']);
  }

}
