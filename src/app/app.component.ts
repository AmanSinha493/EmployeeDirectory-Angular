import { Component} from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EmployeeTableComponent } from './employees/employee-table/employee-table.component';
import { AddEmployeeModalComponent } from './employees/add-employee-modal/add-employee-modal.component';
import { RoleBodyComponent } from './roles/role-body/role-body.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { RoleEmployeesComponent } from './roles/role-employees/role-employees.component';
import { SideBarComponent } from './side-bar/side-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLinkActive,
     SearchBarComponent,  EmployeeTableComponent,AddRoleComponent, AddEmployeeModalComponent,
    RoleBodyComponent, RoleEmployeesComponent,SideBarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticeAngular';
  isCollapsed: boolean = false;
  sideBarCollapse() {
    const icon = document.querySelector(".collapse-btn")! as HTMLButtonElement;
    const mainBody = document.getElementById("main-body")! as HTMLElement;
    if (!this.isCollapsed) {
      mainBody.style.gridTemplateColumns = "1fr 15fr";
      icon.classList.add('collapsed');
    }
    else {
      mainBody.style.gridTemplateColumns = "1fr 5fr";
      icon.classList.remove('collapsed');
    }
    this.isCollapsed = !this.isCollapsed;
  }
}
