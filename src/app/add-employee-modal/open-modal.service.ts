import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  constructor() { }
  openAddEmployeeModal(): void {
    var AddEmployeeModal = document.getElementsByClassName('add-employee-form')[0];
    AddEmployeeModal.classList.add('show-addEmployee-form');
  }
}


