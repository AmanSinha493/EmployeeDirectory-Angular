import { Component } from '@angular/core';
import { HeaderComponent } from '../../employees/header/header.component';
import { AlphabeticFilterComponent } from '../../filters/alphabetic-filter/alphabetic-filter.component';
import { FilterBarComponent } from '../../filters/filter-bar/filter-bar.component';
import { AddEmployeeModalComponent } from '../../employees/add-employee-modal/add-employee-modal.component';
import { EmployeeTableComponent } from '../../employees/employee-table/employee-table.component';
@Component({
  selector: 'app-employee-container',
  standalone: true,
  imports: [HeaderComponent,AlphabeticFilterComponent,FilterBarComponent,AddEmployeeModalComponent,EmployeeTableComponent],
  templateUrl: './employee-container.component.html',
  styleUrl: './employee-container.component.css'
})
export class EmployeeContainerComponent {
  selectedAlphabet: string | null = null;
  handleAlphabetSelected(alphabet: any): void {
    this.selectedAlphabet = alphabet;
    console.log('Selected alphabet:', this.selectedAlphabet);
  }
  filterProperties:string[]=[];
  handleFilterproperties(params:string[]):void{
    this.filterProperties=params;
    console.log(this.filterProperties);
  }

}
