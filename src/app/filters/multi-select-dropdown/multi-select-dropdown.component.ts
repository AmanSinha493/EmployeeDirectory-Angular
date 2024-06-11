import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-multi-select-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.css'
})
export class MultiSelectDropdownComponent {
  @Input() label: string = "";
  @Input() options: string[] = [];
  @Output() checkedValuesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  ngOnInit() {
    // let input = document.querySelectorAll('.filter-options-container input') as NodeListOf<HTMLInputElement>;
    // for (let i = 0; i < input.length; i++) {
    //     let select = input[i].parentNode! as HTMLElement;
    //     select.addEventListener('click', this.selectFilter)
    // }
  }

  checkedValues: string[] = [];
  selectFilter(event: any, option: string): void {
    const checkbox = event.target as HTMLInputElement;
    checkbox.checked ? this.checkedValues.push(option) : this.checkedValues = this.checkedValues.filter(value => value !== option);
    console.log(this.checkedValues);
    this.checkedValuesChange.emit(this.checkedValues);
  }

  toggleDropdown(event: MouseEvent): void {
    const filterLabel = event.target as HTMLElement;
    const dropdown = filterLabel.nextElementSibling as HTMLElement;
    dropdown.classList.toggle('hide');
  }

  emitCheckedValues(): void {
    this.checkedValuesChange.emit(this.checkedValues);
  }
  
  isChecked(option: string): boolean {
    return this.checkedValues.includes(option);
  }

}
