import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }
  private url: string = "https://localhost:7172/api/Employees";
  Get() {
    return this.http.get(this.url);
  }
  // add(employee:Employee) {
    
  // }
  add(employee: Employee): Observable<Employee> {
    // const employeeJson = JSON.stringify(employee);
    return this.http.post<Employee>(this.url, employee);
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
