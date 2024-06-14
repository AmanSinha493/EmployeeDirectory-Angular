import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrl: './delete-confirmation-modal.component.css'
})
export class DeleteConfirmationModalComponent {
  @Input() show: boolean = false;
  @Output() hide:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  yes(){
    this.delete.emit();
    this.no();
  }
  no(){
    // this.show=false;
    this.hide.emit();
  }
}
