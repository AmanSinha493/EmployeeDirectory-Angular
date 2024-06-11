import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-roles-header',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLinkActive],
  templateUrl: './roles-header.component.html',
  styleUrls: ['./roles-header.component.css','../../employees/header/header.component.css']
})
export class RolesHeaderComponent {

}
