import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-bar',
  standalone: true,
  imports: [CommonModule],
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
