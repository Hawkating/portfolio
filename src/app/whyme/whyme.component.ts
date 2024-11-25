import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output()showPage = new EventEmitter();

  emitShowPage(){
   this.showPage.emit(this.navigateTo);
  }

  emitShowPageContact(){
    this.showPage.emit('contact');
   }

}
