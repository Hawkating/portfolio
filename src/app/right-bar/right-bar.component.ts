import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  standalone: true,
  imports: [CommonModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './right-bar.component.html',
  styleUrl: './right-bar.component.scss'
})
export class RightBarComponent {
  public _currentPageNav = 'atf';
  @Input() 
  set currentPageNav(value: string) {
    this._currentPageNav = value;
  }
}
