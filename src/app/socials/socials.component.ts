import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  iconMailSrc = '../../assets/icons/icon-mail.svg';
  iconLinkedinSrc = '../../assets/icons/icon-linkedin.svg';
  iconGithubSrc = '../../assets/icons/icon-github.svg';

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
