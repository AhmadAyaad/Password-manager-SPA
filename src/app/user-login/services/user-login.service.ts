import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/login/models/loginDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private apiURL = `${environment.apiURL}userLogins`;
  constructor(private http: HttpClient) { }

  addNewUserLogin(userLoginDTO: LoginDTO): Observable<any> {
    return this.http.post(`${this.apiURL}`, userLoginDTO);
  }
  getUserLogins(): Observable<LoginDTO[]> {
    return this.http.get<LoginDTO[]>(`${this.apiURL}`);
  }
  getUserLogin(username: string): Observable<LoginDTO> {
    return this.http.get<LoginDTO>(`${this.apiURL}/${username}`);
  }
  updateUserLogin(userLogin: any): Observable<any> {
    return this.http.put(`${this.apiURL}`, userLogin);
  }
  deleteUserLogin(username: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${username}`)
  }
}
