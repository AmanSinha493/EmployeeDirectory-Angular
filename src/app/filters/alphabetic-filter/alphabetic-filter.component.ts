import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alphabetic-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alphabetic-filter.component.html',
  styleUrl: './alphabetic-filter.component.css'
})

export class AlphabeticFilterComponent implements OnInit {
  ngOnInit() {

  }
  // @Output() checkedAlphabet: EventEmitter<string> = new EventEmitter<string>();
  @Output() alphabetSelected = new EventEmitter<string>();
  @Output() triggerAlphabeticFilter = new EventEmitter<any>();


  range(start: number, end: number) {
    return Array(end - start).fill(0).map((_, i) => start + i);
  }
  getLetter(i: number): string {
    return String.fromCharCode(64 + i);
  }

  selectedAlphabet: string | null = null;
  selectAlphabet(letter: string): void {
    if (this.selectedAlphabet === letter) {
      this.selectedAlphabet = '';
    } else {
      this.selectedAlphabet = letter;
    }
    this.alphabetSelected.emit(this.selectedAlphabet);
    this.triggerAlphabeticFilter.emit();
  }
  resetFilter(){
    console.log('reset alphabet');
    let allAlphabets = (document.querySelector('.a-to-z-filter') as HTMLElement).querySelectorAll('div:not(:first-child)') as NodeListOf<HTMLElement>;
    allAlphabets.forEach(x => x.classList.remove('selected'));
    // this.alphabetSelected.emit('');
  }
}
