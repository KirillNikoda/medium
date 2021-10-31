import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { IRegisterRequest } from '../types/register-request.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../types/auth-response.interface';
import { map } from 'rxjs/operators';
import { ILoginRequest } from '../types/login-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  public login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';

    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  private getUser(response: IAuthResponse) {
    return response.user;
  }
}
