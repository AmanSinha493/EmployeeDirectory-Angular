import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-employees.component.html',
  styleUrl: './role-employees.component.css'
})
export class RoleEmployeesComponent {
//   @Input() employees=[{ "img": "",
//   "name": "",
//   "email": "",
//   "location": "",
//   "dept": "",
//   "role": "",
//   "roleId":"",
//   "empNo": "",
//   "status": "",
//   "mobile": "",
//   "joinDate": ""
// }]
employees=[ {
  "img": "data:image/png;base64,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"
,
  "name": "Edgar Jones",
  "email": "edgar@tezo.com",
  "location": "Hyderabad",
  "dept": "Product Engg",
  "role": "Full Stack Developer",
  "roleId":"R001",
  "empNo": "TZ002341",
  "status": "Active",
  "mobile": "1234567890",
  "joinDate": "12/03/2023"
},
{
  "img": "data:image/png;base64,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"
,
  "name": "Jennifer Wilson",
  "email": "jennifer.wilson@yahoo.com",
  "location": "Bangalore",
  "dept": "Product Engg",
  "role": "Customer Service Manager",
  "roleId":"R002",
  "empNo": "TZ789011",
  "status": "Inactive",
  "mobile": "7789123456",
  "joinDate": "30/03/2020"
}
]
}