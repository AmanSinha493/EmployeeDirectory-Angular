import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alphabetic-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alphabetic-filter.component.html',
  styleUrl: './alphabetic-filter.component.css'
})
export class AlphabeticFilterComponent {
  range(start: number, end: number) {
    return Array(end - start).fill(0).map((_, i) => start + i);
  }
  getLetter(i: number): string {
    return String.fromCharCode(64 + i);
  }
}
