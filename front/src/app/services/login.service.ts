import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  login1(body: any) {
    return this._http.post('http://localhost:3000/api/student/login', body, {
      observe: 'body',
    });
  }
  login2(body: any) {
    return this._http.post('http://localhost:3000/api/instructor/login', body, {
      observe: 'body',
    });
  }
}
