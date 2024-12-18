import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [ArrowComponent, CommonModule],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss'
})

export class WhymeComponent {
  language: string = 'en';
  navigateTo: string = 'skills';

  @Input() set animationObserver(value: string) {
    if (value == 'whyme') {
      this.observeAnimation();
    } else {
      this.observeAnimationDelete();
    }
  }

  @Output() showPage = new EventEmitter();

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  /**
  * emits the showPage-Event to navigate to skills-component
  */
  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

  /**
  * emits the showPage-Event to navigate to contact-component
  */
  emitShowPageContact() {
    this.showPage.emit('contact');
  }

  /**
   * handles the hover-animation (on mouse over)
   */
  observeAnimation() {
    document.getElementById('located')?.classList.add('start-animation');
    document.getElementById('remote')?.classList.add('start-animation');
    document.getElementById('communication')?.classList.add('start-animation');
  }

  /**
   * handles the hover-animation (on mouse leaves)
   */
  observeAnimationDelete() {
    document.getElementById('located')?.classList.remove('start-animation');
    document.getElementById('remote')?.classList.remove('start-animation');
    document.getElementById('communication')?.classList.remove('start-animation');
  }

}
