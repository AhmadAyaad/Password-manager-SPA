import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  constructor() { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let userData = {
      userName: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
    };
    if (userData && userData.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
