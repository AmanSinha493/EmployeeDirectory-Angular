import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { OpenModalService } from '../add-employee-modal/open-modal.service';
import { Employee } from '../../../models/Employee';
import { Project } from '../../../models/Project';
import { Role } from '../../../models/Role';
import { Location } from '../../../models/Location';
import { Department } from '../../../models/Department';
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
  @Input() employeeData: Employee[] = [];
  @Output() triggerExport: EventEmitter<any> = new EventEmitter<any>();
  constructor(private OpenModalService: OpenModalService) { }
  openAddEmployeeModal(): void {
    this.OpenModalService.openAddEmployeeModal()
  }

  export() {
    this.triggerExport.emit();
  }
  
}

