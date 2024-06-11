import { Component } from '@angular/core';
import { OpenModalService } from './open-modal.service';
@Component({
  selector: 'app-add-employee-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-employee-modal.component.html',
  styleUrl: './add-employee-modal.component.css'
})

export class AddEmployeeModalComponent {
  constructor(private OpenModalService: OpenModalService) { }
  openAddEmployeeModal(): void {
    this.OpenModalService.openAddEmployeeModal()
  }
  closeAddEmployeeModal(): void {
    const form = document.getElementById("employeeForm") as HTMLFormElement;
    form.reset();
    [...form.querySelectorAll('input'), ...form.querySelectorAll('select')].forEach(element => {
      this.showValidInput(element, "");
      element.disabled = false;
    });
    (document.getElementById('empNo') as HTMLInputElement).readOnly = false;
    (document.getElementById('empNo')! as HTMLInputElement).style.outline = "";
    let submitBtn = (document.querySelector('#submitButton')! as HTMLButtonElement);
    submitBtn.style.display = "";
    submitBtn.textContent = "Add Employee";
    (document.querySelector('#cancel')! as HTMLButtonElement).textContent = "Cancel";
    (document.querySelector('#cancel')! as HTMLButtonElement).className = "";
    (document.getElementsByClassName('upload-profile-pic-btn')[0]! as HTMLButtonElement).style.display = '';
    (document.getElementsByClassName('upload-profile-pic-btn')[0]! as HTMLButtonElement).disabled = false;
    document.getElementsByClassName('add-employee-form')[0].classList.remove('show-addEmployee-form');
    document.querySelector('.add-employee-form h1')!.textContent = "Add Employee";
    if (!location.href.includes("index.html"))
      (document.getElementById('profileImagePreview')! as HTMLImageElement).src = "../../assets/add-employee-default-user.svg";

    else
      (document.getElementById('profileImagePreview')! as HTMLImageElement).src = "./assets/add-employee-default-user.svg";
  }

  showValidInput(element: HTMLElement, message: string): void {
    // element.style.outlineColor = "red";
    let parentDiv = element.parentElement;
    let span = parentDiv?.querySelector('span');
    if (span) {
      span.innerHTML = message;
      span.style.color = "red";
    }
  }
}
