import { Component } from '@angular/core';
import { RoleBodyComponent } from '../../roles/role-body/role-body.component';
import { FilterBarComponent } from '../../filters/filter-bar/filter-bar.component';
import { RolesHeaderComponent } from '../../roles/roles-header/roles-header.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-role-container',
  standalone: true,
  imports: [RoleBodyComponent,FilterBarComponent,RolesHeaderComponent,RouterModule],
  templateUrl: './role-container.component.html',
  styleUrl: './role-container.component.css'
})
export class RoleContainerComponent {

}
