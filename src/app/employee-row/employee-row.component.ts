import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-row',
  standalone: true,
  imports: [],
  templateUrl: './employee-row.component.html',
  styleUrl: '../employee-table/employee-table.component.css'
})
export class EmployeeRowComponent {
@Input() empData={ "img": "",
  "name": "",
  "email": "",
  "location": "",
  "dept": "",
  "role": "",
  "roleId":"",
  "empNo": "",
  "status": "",
  "mobile": "",
  "joinDate": ""}
}
