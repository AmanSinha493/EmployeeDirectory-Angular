import { Component, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MultiSelectDropdownComponent } from '../multi-select-dropdown/multi-select-dropdown.component';
import { LocationServicesService } from '../../services/location/location-services.service';
import { Department } from '../../models/Department';
import { DepartmentServicesService } from '../../services/department/department-services.service';
@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [MultiSelectDropdownComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  locationOptions: any;
  DepartmentOptions: any;
  constructor(private locService: LocationServicesService, private deptService: DepartmentServicesService) {
    // this.locService.Get().subscribe((data) => {this.locationOptions = data;})
    this.locService.Get().subscribe((data: any) => {
      this.locationOptions = Object.values(data).map((location: any) => location.name);
    });
    this.deptService.Get().subscribe((data: any) => {
      this.DepartmentOptions = Object.values(data).map((dept: any) => dept.name);
  });
  };
  @Output() filterParams: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() triggerApplyFilter: EventEmitter<any> = new EventEmitter();
  @Output() triggerResetFilter: EventEmitter<any> = new EventEmitter();

  // locationOptions: string[] = ['Hyderabad', 'Banglore', 'Mumbai'];
  // DepartmentOptions: string[] = ['Product Engg', 'QA'];
  StatusOptions: string[] = ['Active', 'InActive'];
  // hideDropdown:boolean=false;

  status: string[] = [];
  location: string[] = [];
  department: string[] = [];
  filterProperties: string[] = [];
  selectedStatus(values: string[]): void {
    this.status = values;
    console.log(this.status);
  }
  selectedLocation(values: string[]): void {
    this.location = values;
    console.log(this.location);
  }
  selectedDepartment(values: string[]): void {
    this.department = values;
    console.log(this.department);
  }

  applyFilter(): void {
    // document.querySelector('.apply-btn')?.classList.add('active');
    this.filterProperties = [];
    if (this.status.length === 0) {
      this.filterProperties.push('status');
    } else {
      this.filterProperties.push(...this.status);
    }

    if (this.location.length === 0) {
      this.filterProperties.push('location');
    } else {
      this.filterProperties.push(...this.location);
    }

    if (this.department.length === 0) {
      this.filterProperties.push('department');
    } else {
      this.filterProperties.push(...this.department);
    }

    this.filterParams.emit(this.filterProperties);
    this.triggerApplyFilter.emit();
  }

  @ViewChildren(MultiSelectDropdownComponent) dropdown!: QueryList<MultiSelectDropdownComponent>;
  resetFilter(): void {
    document.querySelector('.apply-btn')?.classList.remove('active');
    document.querySelector('.reset-btn')?.classList.remove('active');
    this.dropdown.forEach(child => child.hideDropddown());
    this.triggerResetFilter.emit();
    // this.hideDropdown=true;
  }
}

