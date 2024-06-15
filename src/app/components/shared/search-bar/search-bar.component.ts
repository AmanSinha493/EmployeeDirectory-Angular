import { Component } from '@angular/core';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  constructor(private authService: AuthServiceService, private router: Router) { };
  searchBar(): void {
    let searchInput = (document.querySelector(".search-input input") as HTMLInputElement).value;
    searchInput = searchInput.split(' ').join('').toLowerCase();
    let table = document.querySelector(".employee-table tbody")! as HTMLTableElement;
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i]! as HTMLTableRowElement;
      let name = row.cells[1].textContent!.toLowerCase();
      let location = row.cells[2].textContent!.toLowerCase();
      let dept = row.cells[3].textContent!.toLowerCase();
      let role = row.cells[4].textContent!.toLowerCase();
      if (name.includes(searchInput) || location.includes(searchInput) || dept.includes(searchInput) || role.includes(searchInput)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
