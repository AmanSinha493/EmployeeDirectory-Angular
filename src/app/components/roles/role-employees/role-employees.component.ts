import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../../../services/employee/employee-service.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/Employee';
@Component({
  selector: 'app-role-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-employees.component.html',
  styleUrl: './role-employees.component.css'
})
export class RoleEmployeesComponent implements OnInit{

employees:any;
filteredEmployees:any;
constructor(
    private route: ActivatedRoute,
    private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.empService.Get().subscribe((data) => {
      this.employees = data;      

      this.route.params.subscribe(params => {
        const roleId:string = params['id'];
        console.log(roleId);
        this.filteredEmployees = this.employees.filter((employee:Employee) => employee['roleID'].toString() === roleId);   
        console.log(this.filteredEmployees);   
      });      
    });
  }

}
