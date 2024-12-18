import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  language: string = 'en';
  private _currentPageNav = '';

  @Input()
  set currentPageNav(value: string) {
    this._currentPageNav = value;
    this.setHeadline();
  }

  @Output() showPage = new EventEmitter();
  @Output() openBurger = new EventEmitter();

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  /**
   * emits the showPage-Event to navigate to the choosen page
   * @param targetPage id of target-page
   */
  emitShowPage(targetPage: string) {
    const pageObj = {
      current: this.currentPageNav,
      target: targetPage,
    };
    this.showPage.emit(pageObj);
  }

  /**
   * handles the headline-classes, to get a stroke-effect on the current component-navigator
   */
  setHeadline() {
    document.getElementById('whyme-nav')?.classList.remove('current');
    document.getElementById('skills-nav')?.classList.remove('current');
    document.getElementById('mywork-nav')?.classList.remove('current');
    document.getElementById('contact-nav')?.classList.remove('current');
    document.getElementById(this._currentPageNav + '-nav')?.classList.add('current');
  }

  /**
   * emits the openBurger-Event for responsive-menu
   */
  emitOpenBurgerMenu() {
    this.openBurger.emit();
  }

}