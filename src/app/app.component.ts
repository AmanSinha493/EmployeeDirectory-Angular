import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdateBoxComponent } from './side-bar/update-box/update-box.component';
import { OrgLogoComponent } from './side-bar/org-logo/org-logo.component';
import { SideBarNavigationComponent } from './side-bar/side-bar-navigation/side-bar-navigation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { AlphabeticFilterComponent } from './filters/alphabetic-filter/alphabetic-filter.component';
import { FilterBarComponent } from './filters/filter-bar/filter-bar.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpdateBoxComponent,OrgLogoComponent,FilterBarComponent,AlphabeticFilterComponent,
    SideBarNavigationComponent,SearchBarComponent,HeaderComponent,EmployeeTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticeAngular';
}
