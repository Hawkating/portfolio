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
import { RightBarComponent } from './right-bar/right-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ArrowComponent, AtfComponent, WhymeComponent, SocialsComponent, SkillsComponent, MyworkComponent, ProjectcardComponent, ContactComponent, RightBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jan Bruchwalski';
  pages: string[] = ['atf', 'whyme', 'skills', 'mywork', 'contact'];
  oldPage: string = 'atf'
  currentPage: string = 'atf';
  burgerOpen = false;

  showPageViaNavbar(page: { target: string; current: string }): void {
    this.currentPage = page.target;
    this.showPage(page.target);

  }


  showPageViaArrow(page: string): void {
    this.currentPage = page;
    console.log(this.currentPage)
    this.showPage(page);
  }

  showPage(page: string) {
    if (window.innerWidth < 800) {
      let element = document.getElementById('atf');
      element?.scrollIntoView();
    } else {
      let indexTargetPage = this.pages.indexOf(page);

      const offset = indexTargetPage * -100;
      const pagesContainer = document.getElementById('pages-container');

      if (pagesContainer) {
        pagesContainer.style.transform = `translateX(${offset}%)`;
      }


      this.oldPage = page;
      if (this.currentPage == 'contact') {
        setTimeout(() => {
          document.getElementById('right-bar')?.classList.remove('d-none');
        }, 1000);

      } else {
        setTimeout(() => {
          document.getElementById('right-bar')?.classList.add('d-none');
        }, 1000)

      }
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

  showPageViaNavbarResp(): void {
    if (!this.burgerOpen) {
      document.getElementById('burger-container')?.classList.add('start-animation');
      document.getElementById('burger-container')?.classList.remove('close-animation');
      this.burgerOpen = true;
    } else {
      document.getElementById('burger-container')?.classList.add('close-animation');
      document.getElementById('burger-container')?.classList.remove('start-animation');
      this.burgerOpen = false;
    }
  }

  closeBurger(){
    document.getElementById('burger-container')?.classList.add('close-animation');
    document.getElementById('burger-container')?.classList.remove('start-animation');
    this.burgerOpen = false;
  }



}
