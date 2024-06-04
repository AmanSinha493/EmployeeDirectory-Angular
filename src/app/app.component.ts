import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdateBoxComponent } from './side-bar/update-box/update-box.component';
import { OrgLogoComponent } from './side-bar/org-logo/org-logo.component';
import { SideBarNavigationComponent } from './side-bar/side-bar-navigation/side-bar-navigation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { AlphabeticFilterComponent } from './filters/alphabetic-filter/alphabetic-filter.component';
import { FilterBarComponent } from './filters/filter-bar/filter-bar.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import { RoleBodyComponent } from './roles/role-body/role-body.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { RoleEmployeesComponent } from './roles/role-employees/role-employees.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpdateBoxComponent, OrgLogoComponent, FilterBarComponent, AlphabeticFilterComponent,
    SideBarNavigationComponent, SearchBarComponent, HeaderComponent, EmployeeTableComponent,AddRoleComponent, AddEmployeeModalComponent,
    RoleBodyComponent, RoleEmployeesComponent],
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
