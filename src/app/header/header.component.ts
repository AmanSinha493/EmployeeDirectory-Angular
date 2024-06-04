import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { OpenModalService } from '../add-employee-modal/open-modal.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AddEmployeeModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private OpenModalService: OpenModalService) {}
  openAddEmployeeModal(): void {
   this.OpenModalService.openAddEmployeeModal()
  }
}
