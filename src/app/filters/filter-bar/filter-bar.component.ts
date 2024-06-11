import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MultiSelectDropdownComponent } from '../multi-select-dropdown/multi-select-dropdown.component';
@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [MultiSelectDropdownComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {

  @Output() filterParams: EventEmitter<string[]> = new EventEmitter<string[]>();
  locationOptions: string[] = ['Hyderabad', 'Banglore', 'Mumbai'];
  DepartmentOptions: string[] = ['Product Engg', 'QA'];
  StatusOptions: string[] = ['Active', 'InActive'];


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
  // @ViewChild('dropdown') dropdown!: MultiSelectDropdownComponent;

  applyilter(): void {
    this.filterProperties = [];
    // For 'status' array
    if (this.status.length === 0) {
      this.filterProperties.push('status');
    } else {
      this.filterProperties.push(...this.status);
    }

    // For 'location' array
    if (this.location.length === 0) {
      this.filterProperties.push('location');
    } else {
      this.filterProperties.push(...this.location);
    }

    // For 'department' array
    if (this.department.length === 0) {
      this.filterProperties.push('department');
    } else {
      this.filterProperties.push(...this.department);
    }
    // console.log(this.filterProperties);
    this.filterParams.emit(this.filterProperties);
  }
}

