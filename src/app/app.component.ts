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
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { FooterComponent } from "./footer/footer.component";
import { UserfeedbackComponent } from "./userfeedback/userfeedback.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ArrowComponent, AtfComponent, WhymeComponent, SocialsComponent, SkillsComponent, MyworkComponent, ProjectcardComponent, ContactComponent, RightBarComponent, LegalNoticeComponent, PrivacyPolicyComponent, FooterComponent, UserfeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jan Bruchwalski';
  pages: string[] = ['atf', 'whyme', 'skills', 'mywork', 'contact'];
  oldPage: string = 'atf'
  currentPage: string = 'atf';
  burgerOpen = false;

  /**
   * Behaviour via Navbar-Scrolling
   * @param page 
   */
  showPageViaNavbar(page: { target: string; current: string }): void {
    this.currentPage = page.target;
    this.showPage(page.target);
  }

  /**
   * scrolls to the next component after clicking arrow-navigator
   * @param page 
   */
  showPageViaArrow(page: string): void {
    this.currentPage = page;
    console.log(this.currentPage)
    this.showPage(page);
  }

  /**
   * Scrolls to choosen component. Behaviour depending on window-width
   * @param page 
   */
  showPage(page: string) {
    if (window.innerWidth < 800) {
      if (page == "contact") {
        let element = document.getElementById('contact');
        element?.scrollIntoView();
      } else {
        let element = document.getElementById('atf');
        element?.scrollIntoView();
      }
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

  /**
   * scrolls to contact-component
   */
  goToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * hides pages after scrolling for viewarea
   */
  hidePages(page: string) {
    setTimeout(() => {
      for (let i = 0; i < this.pages.length; i++) {
        if (page != this.pages[i]) {
          document.getElementById(this.pages[i])?.classList.add('d-none');
        }
      }
    }, 500)
  }

  /**
   * opens or closes the burger Menu
   */
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

  /**
   * closes the Burger-Menu
   */
  closeBurger() {
    document.getElementById('burger-container')?.classList.add('close-animation');
    document.getElementById('burger-container')?.classList.remove('start-animation');
    this.burgerOpen = false;
  }

  /**
   * opens the dialog
   * @param id privacy policy or legal notice
   */
  showDialog(id: string) {
    console.log("legal notice test");
    document.getElementById(id)?.classList.remove('d-none');
  }

  /**
   * closes the dialog
   */
  closeDialog(id: string) {
    document.getElementById(id)?.classList.add('d-none');
  }

}
