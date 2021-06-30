import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let requestClone = request.clone({
      headers: request.headers.append("Authorization", "Bearer " + "Mavricks api token")
    });

    return next.handle(requestClone).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401 || event.status === 403) {
          }
        }
        return event;
      }),
      catchError((e: any) => {
        if (e.status === 401) {
          return throwError(e);
        }
        return throwError(e)
      })
    );
  }
}
