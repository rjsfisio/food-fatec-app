import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { API_CONFIG } from '../config/api_config';
import { UserLogin } from '../model/userlogin';
import { ResponseLogin } from '../model/responselogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin) {
    return this.http.post<ResponseLogin>(this.url+'/auth/login', userLogin).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("refresh", value.refresh)
      })
    );
  }
}
