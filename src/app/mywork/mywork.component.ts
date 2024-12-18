import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from "../arrow/arrow.component";
import { ProjectcardPreviewComponent } from '../projectcard-preview/projectcard-preview.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectcardComponent, CommonModule, ArrowComponent, ProjectcardPreviewComponent],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})

export class MyworkComponent {
  language: string = 'en';
  navigateTo = 'contact';
  projectIndex = 0;

  @Input() set animationObserver(value: string) {
    if (value == 'mywork') {
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
  * emits the showPage-Event to navigate to contact-component
  */
  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

  /**
   * adds the class start-animation to animate the card with scaling and transition
   */
  observeAnimation() {
    document.getElementById('project-container')?.classList.add('start-animation');
  }

  /**
   * removes the start-animation class
   */
  observeAnimationDelete() {
    document.getElementById('project-container')?.classList.remove('start-animation');
  }

}