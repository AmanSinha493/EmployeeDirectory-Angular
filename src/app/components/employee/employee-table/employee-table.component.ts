import { Component, Input, ViewEncapsulation } from '@angular/core';
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
    //   employeesData:any
    @Input() employeesData: Employee[] = [];
    constructor(private empServices: EmployeeServiceService) {
        // this.empServices.Get().subscribe((data)=>{
        //   console.log(data);
        //   this.employeesData=data;
        // })
    }





    private asc: boolean = false;
    sortEmployeeTable(this: any) {
        let tableHeaders = document.querySelectorAll('#employee-table th') as NodeListOf<HTMLTableColElement>;
        for (let i = 1; i < tableHeaders.length - 1; i++) {
            tableHeaders[i].addEventListener("click", this.sortColumn.bind(this, tableHeaders[i]));
        }
    }
    sortColumn(this: any, column: HTMLTableColElement) {
        // let storage = new Storage();
        // let populate = new Populate();
        let employees: Employee[] = this.employeesData;
        let value = column.textContent?.trim().split(" ").join("").toLowerCase();
        let columnName = ""
        switch (value) {
            case "user": columnName = "name";
                break;
            case "location": columnName = "location";
                break;
            case "department": columnName = "dept";
                break;
            case "role": columnName = "role";
                break;
            case "empno": columnName = "empNo";
                break;
            case "joindt": columnName = "joinDate";
                break;
            case "status": columnName = "status";
        }
        this.sortArrayByKey(employees, columnName);
        sessionStorage.setItem("employeesTableDetail", JSON.stringify(employees));
        // populate.unpopulateTable();
        // populate.populateTable();
        this.asc = !this.asc;
    }

    sortArrayByKey(arr: Employee[], key: string) {
        return arr.sort((a, b) => {
            const x = a[key as keyof Employee]!;
            const y = b[key as keyof Employee]!;
            if (!this.asc) {
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
            }
            else {
                if (x > y) {
                    return -1;
                }
                if (x < y) {
                    return 1;
                }
            }
            return 0;
        });
    }
}


// export class SortTable {
//   private asc: boolean = false;
//   constructor() { };
//   sortEmployeeTable(this: any) {
//       let tableHeaders = document.querySelectorAll('#employee-table th') as NodeListOf<HTMLTableColElement>;
//       for (let i = 1; i < tableHeaders.length - 1; i++) {
//           tableHeaders[i].addEventListener("click", this.sortColumn.bind(this, tableHeaders[i]));
//       }
//   }
//   sortColumn(this: any, column: HTMLTableColElement) {
//       // let storage = new Storage();
//       // let populate = new Populate();
//       let employees: Employee[] = ;
//       let value = column.textContent?.trim().split(" ").join("").toLowerCase();
//       let columnName = ""
//       switch (value) {
//           case "user": columnName = "name";
//               break;
//           case "location": columnName = "location";
//               break;
//           case "department": columnName = "dept";
//               break;
//           case "role": columnName = "role";
//               break;
//           case "empno": columnName = "empNo";
//               break;
//           case "joindt": columnName = "joinDate";
//               break;
//           case "status": columnName = "status";
//       }
//       this.sortArrayByKey(employees, columnName);
//       sessionStorage.setItem("employeesTableDetail", JSON.stringify(employees));
//       // populate.unpopulateTable();
//       // populate.populateTable();
//       this.asc = !this.asc;
//   }

//   sortArrayByKey(arr: Employee[], key: string) {
//       return arr.sort((a, b) => {
//           const x = a[key as keyof Employee]!;
//           const y = b[key as keyof Employee]!;
//           if (!this.asc) {
//               if (x < y) {
//                   return -1;
//               }
//               if (x > y) {
//                   return 1;
//               }
//           }
//           else {
//               if (x > y) {
//                   return -1;
//               }
//               if (x < y) {
//                   return 1;
//               }
//           }
//           return 0;
//       });
//   }
// }




// ALTER TABLE your_table_name
// ADD COLUMN new_column_name TEXT DEFAULT 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAYAAADAHFVeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAa4SURBVEhLlZZ7jFR3Fcc/995578w+h30AM7ssj6UtbIGllZTWtkKsrbo0jf80tsSYRv/RqlFjYqyrMRoiRqKmvpq0f4gVNa0IimLpEkIpEqAgrwUW1i7LsuzusLM7r3vnPj13YJeFlqrfzM3czO/3O9/fOed7zhnFE/Bf4DgWE4URCkaOukQDmhJDwSIeTd7Y8b/hA8l840PZyxT1MRTDZt/R7dzb2cWyeeux9KMcywzTFO/grnn3k4hV3zh1Z7wvmWUZnB05Sq5cZnn6w0QDAYKKLKjipb/b9Q+aDGfHcF2PUqlAfXWSpoY5lfN3wnvIbNtlXA4HJFDlsk6iKk48FEDzzkFw+Y1dnuzzcPwLyGlZxjQtXDEVDoVRFX/hvZC73oQlRFkJVzgYEgMqkUgEVbzSAiFODiT4/qYf88a+gxRNl4CshzVVDLiYlkuhpGNIJBzHxvPE9feD75kPR+Ixnte9a3nDy+R0b0q3vNGprFeW6z7x5FO+97OeiLdm/ZPegcPHK2d10/RKJd0rymOULW9y0Kz8fjtmwnhluJ9iIU8oFiNZ34xuFEEz5N4WncsfYzST59EHVmCWLY4fOURRvu/tup8Xf/oj1qzuYjI/Jfn0CEVFqY4qilWIJxK+6RlUwmi7DqF4kqIhMQ9GGRgclmyq1NemcMwEZddg88Y1vLmlh7e2vcjlPa/ytU99hIvnzqDbFlooSqwqUclvwHErZWG5Oo5lVUimUSHbvX8/X//BFv667x2uTVr8cfvfGJ9yZDFEzgqwrrORZHOKt8/0MTU8iFrTyDe++jzffGYDC4cVXFtiq0ZQtKiIqIpITESl1eLkzQrJNLSeF174Tm1NFfe1z2dgIIcTCbNqUQsNdXXU1FSzZ9dvcYZO8eaeA4wPXaTOzfFW7xtMFQ0WPfAgJyyVVFsrQ+86uCLCmD2OEnJFySFsRcQm9qahTObz3t7Dx4hHRIGhOHcvTlFjF7HCNThVMbb9vAfjxEE+3v0sU5lxOh96mP6+0ximKRdqwFvQRTqd5krWpirsEVdFAkGNMclxXX1cVK3NlIJaFa5i5T2LWNI8n7ZkNfGgiqnFOD86wpReYuni1Vy8NIZ99Rzj2Ql2b32JVG2cFQvbRDwq6flzJTcGcxO2XNjFk/OibWkIx8WO5F7yNw0lU7C9oggknQgxOlmSeMfIFG2aQyaxWBRFbvXcxqcZ2LudSG0rX3r2GU70n2L5soWs3fgFEnXNuHoWO1wtCtTEpCPSPsPOg78kV9J49LGvkGpqr5CpkYDCb/ZPsOfYWbJXxhjOOdRImHtPmxw4MVrZ9LFPdGMHojy1MomRv8pzTz9Oy9IuIWrBFrkXxy7h9f8Tb+SU3H6QUv9Jev9+kHRLl7S5m91ELZeKZI7vYH1nE4OXMuzt09Cla9TXq+hKnmuyqSPdSCZT4
