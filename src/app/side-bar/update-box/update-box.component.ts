import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-box.component.html',
  styleUrl: './update-box.component.css'
})
export class UpdateBoxComponent {
  @Input() isCollapsed:boolean=false;
}
