import { Component } from '@angular/core';
import { ArrowComponent } from "../arrow/arrow.component";

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})

export class AtfComponent {
  navigateTo:string = 'whyme';
  constructor() { }

}
