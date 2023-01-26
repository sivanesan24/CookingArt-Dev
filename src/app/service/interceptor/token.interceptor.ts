import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private localService: LocalStorageService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.localService.getToken();

    if(myToken) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${myToken}`}
      })
    }
    
    return next.handle(request).pipe(
      catchError((err: any) => {
        if(err instanceof HttpErrorResponse) {
          if(err.status == 401) {
            this.localService.signOut();
          }
        }
        return throwError(() => new Error("Some other error occurs"));
      })
    );
  }
}
