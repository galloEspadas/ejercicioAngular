import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private _usersService: UsersService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  submit() {
    const usuario = this.loginForm.get('usuario').value;
    const password = this.loginForm.get('pass').value;
    const data = {
      "usuario": usuario,
      "contrasena": password
    }
    this._usersService.postUser(data).subscribe(data => {
      console.log(data);

      if (data.resultado != null) {
        if (data.resultado['id_rol'] == 3) {
          //this.mensageError('Este usuario no tiene permisos');
        } else if (data.resultado['id_rol'] == 4) {
          //this.mensageError('Este usuario no tiene permisos');
        } else if (data.resultado['id_rol'] == 5) {
          this.router.navigate(['/dashboard']);
        } else {
          //this.mensageError('Este usuario y/o contraseña no son correctos');
        }
      }else{
        //this.mensageError('Este usuario y/o contraseña no son correctos');
      }
    });

  }

  //mensageError(error: any) {
  //  
  //  for (let i in error) {
  //    if(i === 'non_field_errors'){
  //      setTimeout(() => this.toastr.error( 'Las credenciales proporcionadas no tienen permisos de entrar' + '\n',
  //        'Ha ocurrido un error', {
  //        timeOut: 5000,
  //        closeButton: true,
  //        progressBar: true,
  //      }));
  //
  //    }else{
  //      setTimeout(() => this.toastr.error( i + ': ' + error[i] + '\n',
  //        'Ha ocurrido un error', {
  //        timeOut: 5000,
  //        closeButton: true,
  //        progressBar: true,
  //      }));
  //    }
  //  }
  //  
  //}

}
