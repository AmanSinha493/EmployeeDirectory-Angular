import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationServicesService {

  constructor(private http:HttpClient) { }
  private  url:string="https://localhost:7172/api/Location";
  Get(){
    return this.http.get(this.url);
  }
}
