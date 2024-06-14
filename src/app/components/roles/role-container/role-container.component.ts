import { Component } from '@angular/core';
import { RoleBodyComponent } from '../role-body/role-body.component';
import { FilterBarComponent } from '../../../filters/filter-bar/filter-bar.component';
import { RolesHeaderComponent } from '../roles-header/roles-header.component';
import { RouterModule } from '@angular/router';
import { Role } from '../../../models/Role';
import { RoleServiceService } from '../../../services/role/role-service.service';
@Component({
  selector: 'app-role-container',
  standalone: true,
  imports: [RoleBodyComponent, FilterBarComponent, RolesHeaderComponent, RouterModule],
  templateUrl: './role-container.component.html',
  styleUrl: './role-container.component.css'
})
export class RoleContainerComponent {
  roles:Role[]=[];
  roleData:any;
  constructor(private roleService:RoleServiceService) {
    this.roleService.Get().subscribe((data)=>{
      console.log(data);
      this.roleData=data;
      this.roles=this.roleData;
    })};

  filterProperties: string[] = [];
  handleFilterproperties(params: string[]): void {
    this.filterProperties = params;
  }
  applyFilter(): void {
    this.filterProperties = this.filterProperties.map(property => property.trim().toLowerCase());
    const filteredRoles: Role[] = this.roles.filter((block: Role) => {
      const department = this.filterProperties.includes(block.department.name.trim().toLowerCase().split(' ').join('')) || this.filterProperties.includes('department');
      const location = this.filterProperties.includes(block.location.name.trim().toLowerCase()) || this.filterProperties.includes('location');
      return department && location;
    });
    console.log(filteredRoles);
    this.roles=filteredRoles;
  }

  resetFilter(): void {
    this.roles = this.roleData;
  }
}
