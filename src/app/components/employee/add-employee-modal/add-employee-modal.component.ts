import { Component, OnInit } from '@angular/core';
import { OpenModalService } from './open-modal.service';
import { EmailValidator, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocationServicesService } from '../../../services/location/location-services.service';
import { DepartmentServicesService } from '../../../services/department/department-services.service';
import { ProjectServicesService } from '../../../services/project/project-services.service';
import { RoleServiceService } from '../../../services/role/role-service.service';
import { Employee } from '../../../models/Employee';
import { Location } from '../../../models/Location';
import { Department } from '../../../models/Department';
import { Project } from '../../../models/Project';
import { Role } from '../../../models/Role';
import { EmployeeServiceService } from '../../../services/employee/employee-service.service';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-add-employee-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-employee-modal.component.html',
  styleUrl: './add-employee-modal.component.css'
})

export class AddEmployeeModalComponent implements OnInit {

  addEmployeeForm!: FormGroup;
  submitted: boolean = false;

  previewSrc: string = "../../assets/images/add-employee-default-user.svg";
  locations!: Location[];
  departments!: Department[];
  projects!: Project[];
  roles!: Role[];
  managers: any;

  id: any;
  profileImg: any;
  fName: any;
  lName: any;
  dob: any;
  email: any;
  mobile: any;
  joiningDate: any;
  location: any;
  role: any;
  dept: any;
  manager: any;
  project: any;
  constructor(private fb: FormBuilder,
    private OpenModalService: OpenModalService,
    private locationService: LocationServicesService,
    private deptService: DepartmentServicesService,
    private ProjectService: ProjectServicesService,
    private roleService: RoleServiceService,
    private empService: EmployeeServiceService) {
    this.locationService.Get().subscribe((data: any) => {
      this.locations = data;
    });
    this.deptService.Get().subscribe((data: any) => {
      this.departments = data;
    });
    this.ProjectService.Get().subscribe((data: any) => {
      this.projects = data;
    });
    this.roleService.Get().subscribe((data: any) => {
      this.roles = data;
    });
  }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      empNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]],
      joiningDate: ['', Validators.required],
      location: ['', Validators.required],
      department: ['', Validators.required],
      jobTitle: ['', Validators.required],
      manager: ['', Validators.required],
      project: ['', Validators.required]
    });
  }
  onProfileImageChange(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.profileImg = files[0];
      const url: string = URL.createObjectURL(this.profileImg);
      this.previewSrc = url;

    }
  }
  getFormControl(controlName: string): AbstractControl | null {
    return this.addEmployeeForm.get(controlName);
  }
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
      (document.getElementById('profileImagePreview')! as HTMLImageElement).src = "../../assets/images/add-employee-default-user.svg";
    else
      (document.getElementById('profileImagePreview')! as HTMLImageElement).src = "./assets/add-employee-default-user.svg";
  }

  showValidInput(element: HTMLElement, message: string): void {
    let parentDiv = element.parentElement;
    let span = parentDiv?.querySelector('span');
    if (span) {
      span.innerHTML = message;
      span.style.color = "red";
    }
  }

  onSubmit(): void {
    const newEmp: Employee = {
      profileImage: this.profileImg.toString(),
      id: this.id,
      name: this.fName + ' ' + this.lName,
      dob: this.dob,
      email: this.email,
      mobileNo: this.mobile,
      joiningDate: this.joiningDate,
      location: this.locations.find(loc => loc.id === this.location)!,
      status: "Active",
      roleID: this.role,
      role: this.roles.find(role => role.id === this.role)!.name,
      department: this.departments.find(department => department.id === this.dept)!,
      manager: "this.manager",
      project: this.projects.find(proj => proj.id === this.project)!
    };
    if (this.profileImg) {
      const reader = new FileReader();
      reader.readAsDataURL(this.profileImg);
      reader.onload = function () {
        newEmp.profileImage = (reader.result as string);
      };
    }
    // this.empService.add(newEmp)
    //   .subscribe(
    //     response => {
    //       console.log('Employee added successfully:', response);
    //     },
    //     error => {
    //       console.error('Error adding employee:', error);
    //     }
    //   );
    const Observable: Observer<Employee> = {
      next: (response) => { },
      error: (error) => {
        console.error('Error adding employee:', error);
      },
      complete: () => { }
    };
    // this.empService.add(newEmp)
    //   .subscribe({
    //     next: response => {
    //       console.log('Employee added successfully:', response);
    //     },
    //     error: error => {
    //       console.error('Error adding employee:', error);
    //     }
    //   });
    console.log(newEmp);
    this.empService.add(newEmp).subscribe(Observable);
  }
  checkValidation(event: Event) {
    // let populate = new Populate();
    event.preventDefault();
    const editflag: boolean = (document.querySelector('#submitButton') as HTMLElement).textContent!.toLowerCase().split(' ').join('') !== "addemployee";
    const employees: Employee[] = JSON.parse(sessionStorage.getItem('employeesTableDetail')!);
    const form: HTMLFormElement = document.getElementById("employeeForm") as HTMLFormElement;
    const formInput: NodeListOf<HTMLInputElement> = form.querySelectorAll('input:not([name="dob"])');
    const formSelect: NodeListOf<HTMLSelectElement> = form.querySelectorAll('select');
    let flag = true;
    for (const element of formInput) {
      switch (element.name) {
        case 'empNo':
          if (!editflag) {
            if (element.value === "") {
              this.showValidInput(element, `&#9888; This is a required field`);
              flag = false;
            } else if (employees!.some(emp => emp.id === element.value)) {
              this.showValidInput(element, `&#9888; Employee ID already exists!`);
              flag = false;
            } else {
              this.showValidInput(element, ``);
            }
          }
          break;
        case 'mobileNumber':
          if (element.value === "") {
            this.showValidInput(element, `&#9888; This is a required field`);
            flag = false;
          } else if (!/^[1-9][0-9]{9}$/.test(element.value)) {
            this.showValidInput(element, `&#9888; Enter a valid number`);
            flag = false;
          } else {
            this.showValidInput(element, ``);
          }
          break;
        case 'firstName':
        case 'lastName':
          if (element.value === "") {
            this.showValidInput(element, `&#9888; This is a required field`);
            flag = false;
          } else if (!/^[A-Za-z]+$/.test(element.value)) {
            this.showValidInput(element, `&#9888; Only alphabets are allowed`);
            flag = false;
          } else {
            this.showValidInput(element, ``);
          }
          break;
        case 'email':
          if (element.value === "") {
            this.showValidInput(element, `&#9888; This is a required field`);
            flag = false;
          } else if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(element.value)) {
            this.showValidInput(element, `&#9888; Invalid Email Address`);
            flag = false;
          } else {
            this.showValidInput(element, ``);
          }
          break;
        case 'joiningDate':
          const currentDate = new Date();
          const currentYear = currentDate.getFullYear();
          const currentDay = currentDate.getDate().toString().padStart(2, '0');
          const inputDateParts = element.value.split('-');
          if (element.value === "") {
            this.showValidInput(element, `&#9888; This is a required field`);
            flag = false;
          } else {
            const inputYear = parseInt(inputDateParts[0]);
            const inputMonth = parseInt(inputDateParts[1]);
            const inputDay = parseInt(inputDateParts[2]);

            if (inputYear > currentYear || (inputYear === currentYear && inputMonth > currentDate.getMonth() + 1) || (inputYear === currentYear && inputMonth === currentDate.getMonth() + 1 && (<string><unknown>inputDay) > (currentDay as string))) {
              this.showValidInput(element, `&#9888; Invalid date`);
              flag = false;
            } else {
              this.showValidInput(element, ``);
            }
          }
          break;

        default:
          break;
      }
    }
    for (const element of formSelect) {
      if (element.value === '') {
        this.showValidInput(element, `&#9888; This is a required field`);
        flag = false;
      } else {
        this.showValidInput(element, ``);
      }
    }
    if (!flag) return;
    if (editflag) {
      // this.updateEmployee((document.getElementById('empNo') as HTMLInputElement).value, event);
    } else {
      // this.handleFormSubmit(event);
    }
    if (location.href.includes("index.html")) {
      setTimeout(function () {
        // populate.unpopulateTable();
        // populate.populateTable();
      }, 200);
    }
  }
}
