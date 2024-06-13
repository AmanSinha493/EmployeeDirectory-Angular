import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AlphabeticFilterComponent } from '../../../filters/alphabetic-filter/alphabetic-filter.component';
import { FilterBarComponent } from '../../../filters/filter-bar/filter-bar.component';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeServiceService } from '../../../services/employee/employee-service.service';
import { Employee } from '../../../models/Employee';
@Component({
  selector: 'app-employee-container',
  standalone: true,
  imports: [HeaderComponent, AlphabeticFilterComponent, FilterBarComponent, AddEmployeeModalComponent, EmployeeTableComponent],
  templateUrl: './employee-container.component.html',
  styleUrl: './employee-container.component.css'
})
export class EmployeeContainerComponent {
  employees: any
  employeesData: Employee[] = [];
  constructor(private empServices: EmployeeServiceService) {
    this.empServices.Get().subscribe((data) => {
      console.log(data);
      this.employees = data;
      this.employeesData = this.employees;
    })
  };
  selectedAlphabet: string | null = null;
  handleAlphabetSelected(alphabet: any): void {
    this.selectedAlphabet = alphabet;
    console.log('Selected alphabet:', this.selectedAlphabet);
  }
  filterProperties: string[] = [];
  handleFilterproperties(params: string[]): void {
    this.filterProperties = params;
  }
  applyAlphabeticFilter(): void {
    const letter = this.selectedAlphabet ? this.selectedAlphabet.toUpperCase() : '';
    const filteredEmployees: Employee[] = this.employees.filter((row: Employee) => {
      const alphabet = letter === '' ? true : row.name.trim().toUpperCase()[0] === letter;
      return alphabet;
    });
    this.employeesData = filteredEmployees;
  }
  applyFilter(): void {
    this.filterProperties = this.filterProperties.map(property => property.trim().toLowerCase());
    const letter = this.selectedAlphabet ? this.selectedAlphabet.toUpperCase() : '';
    const filteredEmployees: Employee[] = this.employees.filter((row: Employee) => {
      const alphabet = letter === '' ? true : row.name.trim().toUpperCase()[0] === letter;
      const status = this.filterProperties.includes(row.status.trim().toLowerCase()) || this.filterProperties.includes('status');
      const department = this.filterProperties.includes(row.department.name.trim().toLowerCase().split(' ').join('')) || this.filterProperties.includes('department');
      const location = this.filterProperties.includes(row.location.name.trim().toLowerCase()) || this.filterProperties.includes('location');
      return alphabet && status && department && location;
    });
    this.employeesData = filteredEmployees;
  }

  resetFilter(): void {
    this.employeesData = this.employees;
    let allAlphabets = (document.querySelector('.a-to-z-filter') as HTMLElement).querySelectorAll('div:not(:first-child)') as NodeListOf<HTMLElement>;
    allAlphabets.forEach(x => x.classList.remove('selected'));
  }



  tableToCSV(): void {
    let employees: Employee[] = this.employeesData;
    let csvContent = this.arrayToCSV(employees);
    this.downloadCSVFile(csvContent);
  }
  arrayToCSV(objArray: Employee[]): string {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let headers: string[] = Object.keys(array[0]).filter(header => (header !== "profileImage" && header !== "mobileNo"))!;
    let str = '"ID","NAME","EMAIL","JOINING DATE","DEPARTMENT ID","DEPARTMENT NAME","ROLE","ROLE ID","LOCATION ID","LOCATION NAME","STATUS","DOB","MANAGER","PROJECT ID","PROJECT NAME"\r\n';
    return array.reduce((str: string, next: Employee) => {
      str += `"${next.id}","${next.name}","${next.email}","${next.joiningDate}","${next.department.id}","${next.department.name}","${next.role}","${next.roleID}","${next.location.id}","${next.location.name}","${next.status}","${next.dob}","${next.manager}","${next.project.id}","${next.project.name}"\r\n`;
      return str;
    }, str);
  }

  downloadCSVFile(csv_data: string): void {
    let CSVFile = new Blob([csv_data], { type: "text/csv" });
    let temp_link = document.createElement('a');
    temp_link.download = "employeeTable.csv";
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    temp_link.click();
    document.body.removeChild(temp_link);
  }
  deleteEmployees(employeesToDelete:string[]) {
    employeesToDelete.forEach(element => {
      this.empServices.delete(element).subscribe({
        next: () => {
          console.log("Employee Deleted Successfully");
          this.employeesData.filter((x)=>{
              x.id!=element;
          })
        },
        error: (error) => {
          console.error("Error deleting Employee", error);
        }
      });

    });

  }
}
