import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = `https://localhost:7172/api`;
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}

login(username: string, password: string): Observable<string> {
  const body = { user: username, password: password };

  return this.http.post(`${this.apiUrl}`, body, { responseType: 'text' }).pipe(
    tap(token => {
      sessionStorage.setItem(this.tokenKey, token);
    }),
    catchError((error) => {
      console.error('Login error:', error);
      sessionStorage.removeItem(this.tokenKey);
      return of(''); 
    })
  );
}


  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRecipes(category: any): Observable<any> {
    const categorySearch = category.alt;
    const options = {
      headers: {
        'Content-Type': 'text/plain'
      }
    };
    return this.http.post<any>('/data', categorySearch, options);
  }
}
