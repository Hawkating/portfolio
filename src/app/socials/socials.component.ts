import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})

export class SocialsComponent {
  language = "en";
  iconMailSrc = '../../assets/icons/icon-mail.svg';
  iconLinkedinSrc = '../../assets/icons/icon-linkedin.svg';
  iconGithubSrc = '../../assets/icons/icon-github.svg';
  public _currentPageNav = 'atf';

  @Input()
  set currentPageNav(value: string) {
    this._currentPageNav = value;
  }

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  /**
   * handles the hover-animation
   * @param icon hovered icon
   */
  onMouseEnter(icon: string) {
    if (icon == 'mail') {
      this.iconMailSrc = `../../assets/icons/icon-${icon}-green.svg`;
    } else if (icon == 'linkedin') {
      this.iconLinkedinSrc = `../../assets/icons/icon-${icon}-green.svg`;
    } else if (icon == 'github') {
      this.iconGithubSrc = `../../assets/icons/icon-${icon}-green.svg`;
    }
  }

  /**
 * handles the hover-animation if the mouse leaves the area
 * @param icon hovered icon
 */
  onMouseLeave(icon: string) {
    if (icon == 'mail') {
      this.iconMailSrc = `../../assets/icons/icon-${icon}.svg`;
    } else if (icon == 'linkedin') {
      this.iconLinkedinSrc = `../../assets/icons/icon-${icon}.svg`;
    } else if (icon == 'github') {
      this.iconGithubSrc = `../../assets/icons/icon-${icon}.svg`;
    }
  }

  /**
   * sets the global language to english or german
   * @param lang en or de
   */
  setLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
  
}
