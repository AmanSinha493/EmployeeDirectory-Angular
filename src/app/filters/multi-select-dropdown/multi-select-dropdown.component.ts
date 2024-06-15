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

  }

  checkedValues: string[] = [];
  selectFilter(event: any, option: string): void {
    const checkbox = event.target as HTMLInputElement;
    checkbox.checked ? this.checkedValues.push(option.toLowerCase().split(' ').join('')) : this.checkedValues = this.checkedValues.filter(value => value !== option);
    console.log(this.checkedValues);
    this.checkedValuesChange.emit(this.checkedValues);
  }

  toggleDropdown(event: MouseEvent): void {
    const filterLabel = event.target as HTMLElement;
    const dropdown = filterLabel.nextElementSibling as HTMLElement;
    dropdown.classList.toggle('hide');
  }

  hideDropddown() {
    if (!document.querySelector(`#${this.label}-filter .${this.label}-dropdown`)?.classList.contains('hide'))
      document.querySelector(`#${this.label}-filter .${this.label}-dropdown`)?.classList.add('hide');
    let input = document.querySelectorAll('.filter-options-container input') as NodeListOf<HTMLInputElement>;
    input.forEach((element) => { element.checked = false });
  }
  
  emitCheckedValues(): void {
    this.checkedValuesChange.emit(this.checkedValues);
  }

  isChecked(option: string): boolean {
    return this.checkedValues.includes(option);
  }

}
