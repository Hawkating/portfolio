import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss'
})
export class WhymeComponent {
  navigateTo: string = 'skills';
  @Input() set animationObserver(value: string) {
    if (value == 'whyme') {
      this.observeAnimation();
    } else {
      this.observeAnimationDelete();
    }
  }
  @Output() showPage = new EventEmitter();

  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

  emitShowPageContact() {
    this.showPage.emit('contact');
  }

  observeAnimation(){
    document.getElementById('located')?.classList.add('start-animation');
    document.getElementById('remote')?.classList.add('start-animation');
    document.getElementById('communication')?.classList.add('start-animation');
  }

  observeAnimationDelete(){
    document.getElementById('located')?.classList.remove('start-animation');
    document.getElementById('remote')?.classList.remove('start-animation');
    document.getElementById('communication')?.classList.remove('start-animation');
  }

}
