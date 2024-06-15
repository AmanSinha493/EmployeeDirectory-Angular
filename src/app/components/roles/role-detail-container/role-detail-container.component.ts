import { Component } from '@angular/core';
import { RoleEmployeesComponent } from '../role-employees/role-employees.component';
import { RoleDetailHeaderComponent } from '../role-detail-header/role-detail-header.component';
@Component({
  selector: 'app-role-detail-container',
  standalone: true,
  imports: [RoleDetailHeaderComponent,RoleEmployeesComponent],
  templateUrl: './role-detail-container.component.html',
  styleUrl: './role-detail-container.component.css'
})
export class RoleDetailContainerComponent {

}
