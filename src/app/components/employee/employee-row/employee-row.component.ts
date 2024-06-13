import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-row.component.html',
  styleUrl: '../employee-table/employee-table.component.css'
})
export class EmployeeRowComponent {
@Input() employees=[{ "img": "",
  "name": "",
  "email": "",
  "location": "",
  "dept": "",
  "role": "",
  "roleId":"",
  "empNo": "",
  "status": "",
  "mobile": "",
  "joinDate": ""}]
}
