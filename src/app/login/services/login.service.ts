import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../models/loginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = `${environment.apiURL}auth`;
  constructor(private http: HttpClient) { }

  login(loginDTO: LoginDTO) {
    return this.http.post(`${this.apiURL}/login`, loginDTO);
  }

}
