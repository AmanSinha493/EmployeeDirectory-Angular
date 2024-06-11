import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLinkActive,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response) {
        this.router.navigate(['/']);
      } else {
        alert('Login failed');
      }
    });
  }
}

// export class Login{
//   id:string;
//   password:string;
//   constructor() {
//     this.id='';
//     this.password='';
//   }
// }
