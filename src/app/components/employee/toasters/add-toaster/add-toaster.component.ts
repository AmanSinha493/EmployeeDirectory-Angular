import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-toaster',
  standalone: true,
  imports: [],
  templateUrl: './add-toaster.component.html',
  styleUrl: './add-toaster.component.css'
})
export class AddToasterComponent implements OnInit {
  @Input() message: string='';
  @Input() isSuccessful: boolean = true;

  statusClass: string='';
  statusImage: string='';

  constructor() { }

  ngOnInit(): void {
      this.statusClass = this.isSuccessful ? 'success' : 'fail';
      this.statusImage = this.isSuccessful ? '../../../../../assets/images//tick.svg' : '../../../../../assets/images/cross.svg';
      setTimeout(() => {
          this.hidePopUp();
      }, 3000);
  }

  hidePopUp() {
      const popup = document.querySelector('.toast');
      if (popup)
          popup.remove();
  }
}
