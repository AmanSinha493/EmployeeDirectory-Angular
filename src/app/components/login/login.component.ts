import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  username: string = 'aman@tezo.com';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }
  ngOnInit(): void {
    this.addInputFocusListeners();
  }
  addInputFocusListeners() {
    const inputs = document.querySelectorAll('.input-box input');

    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.previousElementSibling!.classList.add('active');
      });

      input.addEventListener('blur', () => {
        if ((input as HTMLInputElement).value === '') {
          input.previousElementSibling!.classList.remove('active');
        }
      });
    });
  }
  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response) {
        this.router.navigate(['/employee']);
      } else {
        alert('Login failed');
      }
    });
  }

}

