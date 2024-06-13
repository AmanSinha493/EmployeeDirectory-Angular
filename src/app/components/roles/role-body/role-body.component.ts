import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { RoleServiceService } from '../../../services/role/role-service.service';
@Component({
  selector: 'app-role-body',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,RouterLinkActive],
  templateUrl: './role-body.component.html',
  styleUrl: './role-body.component.css'
})
export class RoleBodyComponent {

  roles:any
  constructor(private rolesDetail:RoleServiceService) {
    this.rolesDetail.roleDetails().subscribe((data)=>{
      console.log(data);
      this.roles=data;
    })}
  // roles = [
  //   {
  //     "dept": "Product Engg",
  //     "location": "Hyderabad",
  //     "role": "Full Stack Developer",
  //     "roleId": "R001"
  //   },
  //   {
  //     "dept": "Product Engg",
  //     "location": "Hyderabad",
  //     "role": "Full Stack Developer",
  //     "roleId": "R001"
  //   }
  // ]
}
