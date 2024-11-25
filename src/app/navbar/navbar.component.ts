import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
// export class NavbarComponent {
//   @Output()showPage = new EventEmitter();
//   @Input()currentPageNav = '';



//   emitShowPage(targetPage:string){
//     const pageObj = {
//       current: this.currentPageNav, // Aktuelle Seite
//       target: targetPage,          // Zielseite
//     };
//     this.showPage.emit(pageObj);   // Event mit dem Objekt auslösen
//   }

//   setHeadline(){
//     document.getElementById(this.currentPageNav)?.classList.add('current');
//   }
// }
export class NavbarComponent {
  @Output() showPage = new EventEmitter();
  private _currentPageNav = '';

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
    document.getElementById('whyme')?.classList.remove('current');
    document.getElementById('skills')?.classList.remove('current');
    document.getElementById('mywork')?.classList.remove('current');
    document.getElementById('contact')?.classList.remove('current');
    document.getElementById(this._currentPageNav)?.classList.add('current');
  }
}