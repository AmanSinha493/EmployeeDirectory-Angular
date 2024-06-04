import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-org-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './org-logo.component.html',
  styleUrl: './org-logo.component.css'
})
export class OrgLogoComponent {
@Input() isCollapsed:boolean=false;
}
