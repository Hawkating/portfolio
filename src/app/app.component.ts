import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ArrowComponent } from "./arrow/arrow.component";
import { AtfComponent } from "./atf/atf.component";
import { WhymeComponent } from "./whyme/whyme.component";
import { SocialsComponent } from './socials/socials.component';
import { SkillsComponent } from './skills/skills.component';
import { MyworkComponent } from "./mywork/mywork.component";
import { ProjectcardComponent } from "./projectcard/projectcard.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ArrowComponent, AtfComponent, WhymeComponent, SocialsComponent, SkillsComponent, MyworkComponent, ProjectcardComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jan Bruchwalski';
  pages: string[] = ['atf', 'whyme', 'skills', 'mywork', 'contact'];
  oldPage: string = 'atf'
  currentPage: string = 'atf';

  showPageViaNavbar(page: { target: string; current: string }): void {
    this.currentPage = page.target;
    // Greife auf target und current zu
    console.log('Aktuelle Seite:', page.current);
    console.log('Zielseite:', page.target);
      // Setze die neue Seite oder führe eine Aktion aus
    this.showPage(page.target);
  }

  // showPageViaArrow(page: string) {
  //   // this.currentPage = current;
  //   let indexTargetPage = this.pages.indexOf(page);
  //   let indexCurrentPage = this.pages.indexOf(this.oldPage);
  //   if (indexTargetPage > indexCurrentPage) {
  //     for (let i = indexTargetPage - 1; i < this.pages.length; i++) {
  //       document.getElementById(this.pages[i])?.classList.remove('d-none');
  //     };
  //     document.getElementById(page)?.scrollIntoView({
  //       behavior: "smooth",  // Sanftes Scrollen
  //       block: "start"       // Das Element wird am Anfang des Viewports ausgerichtet
  //     });
  //     document.getElementById(page)?.classList.remove('d-none');

  //   } else if (indexTargetPage < indexCurrentPage) {
  //     for (let i = indexCurrentPage - 1; i >= indexTargetPage; i--) {
  //       document.getElementById(this.pages[i])?.classList.remove('d-none');
  //     };
  //     console.log("letzter if else block");
  //     document.getElementById(page)?.scrollIntoView({
  //       behavior: "smooth",  // Sanftes Scrollen
  //       block: "start"       // Das Element wird am Anfang des Viewports ausgerichtet
  //     });
  //   }
  //   this.oldPage = this.currentPage;
  //   this.hidePages(page);

  // }

  showPageViaArrow(page: string ): void {
    this.currentPage = page;
    console.log( this.currentPage)
    this.showPage(page);
  }

  showPage(page: string) {
    let indexTargetPage = this.pages.indexOf(page);
    let indexCurrentPage = this.pages.indexOf(this.oldPage);
  
    // Differenz der Seiten berechnen
    const offset = indexTargetPage * -100; // Jede Seite ist 100% breit
  
    // Setze die transform-Eigenschaft für das animierte Scrollen
    const pagesContainer = document.getElementById('pages-container');
    if (pagesContainer) {
      pagesContainer.style.transform = `translateX(${offset}%)`;
    }
  
    // Aktualisiere die aktuelle Seite
    this.oldPage = page;
  }
  

  hidePages(page: string) {
    setTimeout(() => {
      for (let i = 0; i < this.pages.length; i++) {
        if (page != this.pages[i]) {
          document.getElementById(this.pages[i])?.classList.add('d-none');
        }
      }
    }, 500)
  }

}

