import { Component, Output, EventEmitter } from '@angular/core';
import { ArrowComponent } from "../arrow/arrow.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [ArrowComponent, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})

export class AtfComponent {
  language: string = 'en';
  navigateTo: string = 'whyme';

  @Output() showPage = new EventEmitter();

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  /**
   * emits the showPage-Event to navigate to whyme-component
   */
  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

}
