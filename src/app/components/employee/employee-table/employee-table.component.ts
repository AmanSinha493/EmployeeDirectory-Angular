import { Component, Input, ViewEncapsulation,Output, EventEmitter } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee/employee-service.service';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationModalComponent } from '../toasters/delete-confirmation-modal/delete-confirmation-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../../../models/Employee';
@Component({
    selector: 'app-employee-table',
    standalone: true,
    imports: [ CommonModule, HttpClientModule,DeleteConfirmationModalComponent],
    templateUrl: './employee-table.component.html',
    styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
    @Input() employeesData: Employee[] = [];
    @Output() sortData = new EventEmitter<{ columnIdentifier: keyof Employee, sortDirection: 'asc' | 'desc' | 'none' }>();
    @Output() employeeToShow=new EventEmitter<string>();
    isChecked: boolean = false;
    selectedEmployees: string[] = [];
    showDeleteConfirmation:boolean=false;
    constructor(private empServices: EmployeeServiceService) {
    }
    showEmployeeDetail(id:string){
        this.employeeToShow.emit(id);
    }
    invokeDelete(){
        this.showDeleteConfirmation=true;
    }

    deleteEmployees() {
        this.selectedEmployees.forEach(element => {
            this.empServices.delete(element).subscribe({
                next:()=>{
                    console.log("Employee Deleted Successfully");
                    this.employeesData=[...this.employeesData.filter((x)=>x.id!=element)]
                    this.selectedEmployees=[];
                },
                error:(error)=>{
                    console.error("Error deleting Employee",error);
                }
             } );
        });       
    }
    
    toggleRow(): void {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {

            this.selectedEmployees = this.employeesData.map((emp: Employee) => emp.id)
        }
        else {
            this.selectedEmployees = [];
        }
        console.log(this.selectedEmployees);
    }

    selectRow(event: any): void {
        const checkbox = event.target as HTMLInputElement;
        let id = checkbox.id;
        checkbox.checked ? this.selectedEmployees.push(id) : this.selectedEmployees = this.selectedEmployees.filter(value => value !== id);
        console.log(this.selectedEmployees);
    }


    currentSort: 'asc' | 'desc' | 'none' = 'none';
    columnIdentifier: keyof Employee = 'name';

    sort(columnIdentifier: keyof Employee) {
        this.columnIdentifier = columnIdentifier;
        switch (this.currentSort) {
          case 'asc':
            this.currentSort = 'desc';
            break;
          case 'desc':
            this.currentSort = 'none';
            break;
          case 'none':
            this.currentSort = 'asc';
            break;
          default:
            this.currentSort = 'none';
            break;
        }
        this.sortData.emit({ columnIdentifier: this.columnIdentifier, sortDirection: this.currentSort });
      }

      toggleEditOption(event: any) {
        let threeDots = event.target;
        let allEllipsisMenu = threeDots.parentElement.querySelector(`.ellipsis-menu`);
        if (!allEllipsisMenu) return;
        allEllipsisMenu.classList.toggle('hide-ellipsis-menu');
        document.addEventListener('click', (event) => {
            if (!allEllipsisMenu.contains(event.target) && event.target !== threeDots) {
                allEllipsisMenu.style.display = 'none';
            } else {
                allEllipsisMenu.style.display = '';
            }
        });
    }
}


