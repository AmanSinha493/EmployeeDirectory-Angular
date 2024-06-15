import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }
  private  url:string="https://localhost:7172/api/Role";
  Get(){
    return this.http.get(this.url);
  }
}
