import { Component } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss'
})
export class WhymeComponent {
  navigateTo:string = 'skills';


}
