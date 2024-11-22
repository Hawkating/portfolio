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
  currentPage:string = 'atf';

  showPage(page: string) {
    let indexTargetPage = this.pages.indexOf(page);
    let indexCurrentPage = this.pages.indexOf(this.currentPage);
    if(indexTargetPage > indexCurrentPage){
    for (let i = indexTargetPage - 1; i < this.pages.length; i++) {
      document.getElementById(this.pages[i])?.classList.remove('d-none');
    };
    document.getElementById(page)?.scrollIntoView({
      behavior: "smooth",  // Sanftes Scrollen
      block: "start"       // Das Element wird am Anfang des Viewports ausgerichtet
    });
    document.getElementById(page)?.classList.remove('d-none');
    this.hidePages(page);
  } else if (indexTargetPage < indexCurrentPage){
    console.log('hier morgen weiter');
  }
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

