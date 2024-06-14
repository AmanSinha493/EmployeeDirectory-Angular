import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { RoleServiceService } from '../../../services/role/role-service.service';
import { Role } from '../../../models/Role';
@Component({
  selector: 'app-role-body',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,RouterLinkActive],
  templateUrl: './role-body.component.html',
  styleUrl: './role-body.component.css'
})
export class RoleBodyComponent {
  @Input() roles:Role[]=[]
  constructor(){
    console.log(this.roles);
  }
  // @Input() roles:any

  // roles:any
  // constructor(private rolesDetail:RoleServiceService) {
  //   this.rolesDetail.Get().subscribe((data)=>{
  //     console.log(data);
  //     this.roles=data;
  //   })}
  // roles = [
  //   {
  //     "id": "R001",
  //     "name": "Software Engineer",
  //     "department": {
  //       "id": "D001",
  //       "name": "Engineering"
  //     },
  //     "location": {
  //       "id": "L001",
  //       "name": "New York"
  //     },
  //     "description": ""
  //   }
  //   , {
  //     "id": "R002",
  //     "name": "Marketing Specialist",
  //     "department": {
  //       "id": "D002",
  //       "name": "Marketing"
  //     },
  //     "location": {
  //       "id": "L002",
  //       "name": "San Francisco"
  //     },
  //     "description": ""
  //   },
  //   {
  //     "id": "R003",
  //     "name": "Sales Associate",
  //     "department": {
  //       "id": "D003",
  //       "name": "Sales"
  //     },
  //     "location": {
  //       "id": "L003",
  //       "name": "Chicago"
  //     },
  //     "description": ""
  //   }
  // ]
}
