import { Component, Input, ViewEncapsulation,Output, EventEmitter } from '@angular/core';
import { EmployeeRowComponent } from '../employee-row/employee-row.component';
import { EmployeeServiceService } from '../../../services/employee/employee-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../../../models/Employee';
@Component({
    selector: 'app-employee-table',
    standalone: true,
    imports: [EmployeeRowComponent, CommonModule, HttpClientModule],
    templateUrl: './employee-table.component.html',
    styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
    @Input() employeesData: Employee[] = [];
    @Output() employeesToDelete=new EventEmitter<string[]>();
    isChecked: boolean = false;
    selectedEmployees: string[] = [];
    constructor(private empServices: EmployeeServiceService) {
    }


    deleteEmployees() {
        this.employeesToDelete.emit(this.selectedEmployees);
        // this.selectedEmployees.forEach(element => {
            // this.empServices.delete(element).subscribe({
            //     next:()=>{
            //         console.log("Employee Deleted Successfully");
            //         // this.employeesData.filter((x)=>{
            //         //     x.id!=element;
            //         // })
            //     },
            //     error:(error)=>{
            //         console.error("Error deleting Employee",error);
            //     }
            //  } );

        // });
        // for (var i = 1; i < rows.length; i++) {
        //     if (checkbox[i].checked) {
        //         console.log(checkbox[i].id);
        //     }
        // }
       
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
}



// private asc: boolean = false;
// sortEmployeeTable(this: any) {
//     let tableHeaders = document.querySelectorAll('#employee-table th') as NodeListOf<HTMLTableColElement>;
//     for (let i = 1; i < tableHeaders.length - 1; i++) {
//         tableHeaders[i].addEventListener("click", this.sortColumn.bind(this, tableHeaders[i]));
//     }
// }
// sortColumn(this: any, column: HTMLTableColElement) {
    
//     let employees: Employee[] = this.employeesData;
//     let value = column.textContent?.trim().split(" ").join("").toLowerCase();
//     let columnName = ""
//     switch (value) {
//         case "user": columnName = "name";
//             break;
//         case "location": columnName = "location";
//             break;
//         case "department": columnName = "dept";
//             break;
//         case "role": columnName = "role";
//             break;
//         case "empno": columnName = "empNo";
//             break;
//         case "joindt": columnName = "joinDate";
//             break;
//         case "status": columnName = "status";
//     }
//     this.sortArrayByKey(employees, columnName);
//     sessionStorage.setItem("employeesTableDetail", JSON.stringify(employees));
//     // populate.unpopulateTable();
//     // populate.populateTable();
//     this.asc = !this.asc;
// }

// sortArrayByKey(arr: Employee[], key: string) {
//     return arr.sort((a, b) => {
//         const x = a[key as keyof Employee]!;
//         const y = b[key as keyof Employee]!;
//         if (!this.asc) {
//             if (x < y) {
//                 return -1;
//             }
//             if (x > y) {
//                 return 1;
//             }
//         }
//         else {
//             if (x > y) {
//                 return -1;
//             }
//             if (x < y) {
//                 return 1;
//             }
//         }
//         return 0;
//     });
// }
