import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-side-bar-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-navigation.component.html',
  styleUrl: './side-bar-navigation.component.css'
})
export class SideBarNavigationComponent {
  @Input() isCollapsed:boolean=false;
}
