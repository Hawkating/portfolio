import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  iconMailSrc = '../../assets/icons/icon-mail.svg';
  iconLinkedinSrc = '../../assets/icons/icon-linkedin.svg';
  iconGithubSrc = '../../assets/icons/icon-github.svg';
  public _currentPageNav = 'atf';
  @Input()
  set currentPageNav(value: string) {
    this._currentPageNav = value;
  }


  onMouseEnter(icon: string) {
    if (icon == 'mail') {
      this.iconMailSrc = `../../assets/icons/icon-${icon}-green.svg`;
    } else if (icon == 'linkedin') {
      this.iconLinkedinSrc = `../../assets/icons/icon-${icon}-green.svg`;
    } else if (icon == 'github') {
      this.iconGithubSrc = `../../assets/icons/icon-${icon}-green.svg`;
    }
  }

  onMouseLeave(icon: string) {
    if (icon == 'mail') {
      this.iconMailSrc = `../../assets/icons/icon-${icon}.svg`;
    } else if (icon == 'linkedin') {
      this.iconLinkedinSrc = `../../assets/icons/icon-${icon}.svg`;
    } else if (icon == 'github') {
      this.iconGithubSrc = `../../assets/icons/icon-${icon}.svg`;
    }
  }
}
