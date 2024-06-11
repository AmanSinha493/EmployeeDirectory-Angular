import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [ RouterLinkActive, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css','../../employees/add-employee-modal/add-employee-modal.component.css']
})
export class AddRoleComponent {
  constructor(private router: Router) { }
  routeBack(): void {
    this.router.navigate(['back']);
  }
}
