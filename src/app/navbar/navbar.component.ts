import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @Output() showPage = new EventEmitter();
  @Output() openBurger = new EventEmitter();
  private _currentPageNav = '';
  whyme = {
    en: 'Why me',
    de: 'Why me'
  }

  @Input()
  set currentPageNav(value: string) {
    this._currentPageNav = value;
    this.setHeadline();
  }

  emitShowPage(targetPage: string) {
    const pageObj = {
      current: this.currentPageNav,
      target: targetPage,
    };
    this.showPage.emit(pageObj);
  }


  setHeadline() {
console.log(this._currentPageNav);
    document.getElementById('whyme-nav')?.classList.remove('current');
    document.getElementById('skills-nav')?.classList.remove('current');
    document.getElementById('mywork-nav')?.classList.remove('current');
    document.getElementById('contact-nav')?.classList.remove('current');
    document.getElementById(this._currentPageNav + '-nav')?.classList.add('current');
  }

 emitOpenBurgerMenu(){
this.openBurger.emit();
}
}