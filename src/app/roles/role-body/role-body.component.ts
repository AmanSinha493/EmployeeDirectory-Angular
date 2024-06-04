import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-body.component.html',
  styleUrl: './role-body.component.css'
})
export class RoleBodyComponent {
  roles = [
    {
      "dept": "Product Engg",
      "location": "Hyderabad",
      "role": "Full Stack Developer",
      "roleId": "R001"
    },
    {
      "dept": "Product Engg",
      "location": "Hyderabad",
      "role": "Full Stack Developer",
      "roleId": "R001"
    }
  ]
}
