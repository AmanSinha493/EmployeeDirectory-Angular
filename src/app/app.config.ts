// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };



import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HttpHandlerFn, provideHttpClient, withFetch, withInterceptors, HttpRequest } from '@angular/common/http';
import { routes } from './app.routes';
import {  HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() ,
    provideHttpClient(withFetch(), withInterceptors([authInterceptor]))
  
  ]
};

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = localStorage.getItem('auth-token');
  if (authToken) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(cloned);
  } else {
    return next(req);
  }
}
