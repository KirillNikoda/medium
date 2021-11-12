import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from '../services/persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('token');
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    return next.handle(req);
  }
}
