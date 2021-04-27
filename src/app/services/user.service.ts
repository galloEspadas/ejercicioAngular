
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiLogin: string = environment.apiLogin;
  constructor(private http: HttpClient) { }

  postUser(_data: any) {
    let head = {
        "Content-Type": "application/json"
    }
    return this.http.post(`${this.apiLogin}/xccm/user/validarUsuario`, _data, { headers: head }).pipe(map(
      (res: any) => {
        return res;
      }));
  }
}
