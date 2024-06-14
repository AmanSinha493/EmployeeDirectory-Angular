import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AlphabeticFilterComponent } from '../../../filters/alphabetic-filter/alphabetic-filter.component';
import { FilterBarComponent } from '../../../filters/filter-bar/filter-bar.component';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeServiceService } from '../../../services/employee/employee-service.service';
import { Employee } from '../../../models/Employee';
import { Department } from '../../../models/Department';
import { Role } from '../../../models/Role';
import { Location } from '../../../models/Location';
import { AddToasterComponent } from '../toasters/add-toaster/add-toaster.component';
import { OpenModalService } from '../add-employee-modal/modal.service';
@Component({
  selector: 'app-employee-container',
  standalone: true,
  imports: [HeaderComponent, AddToasterComponent, AlphabeticFilterComponent, FilterBarComponent, AddEmployeeModalComponent, EmployeeTableComponent],
  templateUrl: './employee-container.component.html',
  styleUrl: './employee-container.component.css'
})
export class EmployeeContainerComponent {
  employees: any
  employeesData: Employee[] = [];
  originalSort: Employee[] = [];
  employeeToShow: Employee = {
    id: '',
    name: '',
    email: '',
    profileImage: '',
    joiningDate: '',
    department: {
      id: '',
      name: ''
    },
    role: '',
    roleID: '',
    location: {
      id: '',
      name: ''
    },
    mobileNo: '',
    status: '',
    dob: '',
    manager: '',
    project: {
      id: '',
      name: ''
    }
  }
  // @Output() employeeToShow=new EventEmitter<Employee>();
  // employeeToShow:Employee;
  constructor(private empServices: EmployeeServiceService) {
    this.empServices.Get().subscribe((data) => {
      console.log(data);
      this.employees = data;
      this.employeesData = this.employees;
      this.originalSort = [...this.employeesData];
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
    this.originalSort = [...filteredEmployees];

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


  sort(event: { columnIdentifier: keyof Employee, sortDirection: 'asc' | 'desc' | 'none' }): void {
    const { columnIdentifier, sortDirection } = event;

    const compareEmployees = (emp1: Employee, emp2: Employee): number => {
      var value1, value2;

      if (columnIdentifier === 'department' || columnIdentifier === 'role' || columnIdentifier === 'location') {
        value1 = (emp1[columnIdentifier] as Department | Role | Location).name;
        value2 = (emp2[columnIdentifier] as Department | Role | Location).name;
      }
      else {
        value1 = emp1[columnIdentifier];
        value2 = emp2[columnIdentifier];
      }

      if (value1 < value2) return -1;
      if (value1 > value2) return 1;
      return 0;
    };

    if (sortDirection === 'asc') {
      this.employeesData.sort(compareEmployees);
    } else if (sortDirection === 'desc') {
      this.employeesData.sort((a: Employee, b: Employee) => compareEmployees(b, a));
    } else if (sortDirection === 'none') {
      console.log("entered");
      this.employeesData = [...this.originalSort];
    }
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


  @ViewChild(AddEmployeeModalComponent) modal=AddEmployeeModalComponent;
  // showEmployee(id: string) {
  //   // let employee:Employee
  //   this.empServices.getById(id).subscribe((data) => {
  //     // console.log(data);
  //     let temp:any=data;
  //     // this.modal.openAddEmployeeModal();
  //     // console.log(this.employeeToShow);
  //     // employee=temp;
  //     this.employeeToShow=temp;
  //     console.log(this.employeeToShow);
  //     // this.modal.fillData(this.employeeToShow);
  //     // return employee;
  //   })   
  // }
  showEmployee(id: string) {
    this.empServices.getById(id).subscribe(
      (data) => {
        let temp:any=data;
        this.employeeToShow = temp;
      },
      (error) => {
        console.error("API Error:", error);
      }
    );
    console.log(this.employeeToShow);
    
  }

}
