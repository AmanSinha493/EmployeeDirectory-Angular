import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentServicesService {
  constructor(private http:HttpClient) { }
  private  url:string="https://localhost:7172/api/Department";
  Get(){
    return this.http.get(this.url);
  }
}
