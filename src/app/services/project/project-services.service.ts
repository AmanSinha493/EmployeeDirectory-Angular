import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectServicesService {
  constructor(private http:HttpClient) { }
  private  url:string="https://localhost:7172/api/Project";
  Get(){
    return this.http.get(this.url);
  }
}
