class Card {
  number: number = 0;
  id: number = 0;
  name: string = '';
  about: string = '';
  ueber: string = '';
  technologies: string = '';
  learning: string = '';
  image: string = '';
  github: string = '';
  test: string = '';
}

import { Component, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.scss'
})
export class ProjectcardComponent {
  language: string = 'en';
  contentForCard: Card[] = [
    {
      number: 1,
      id: 0,
      name: 'Join',
      about: 'Join was a team-project. My part was to implement the contacts and the API-Setups for the tasks',
      ueber: 'Join war ein Teamprojekt. Meine Aufgabe bestand darin, die Kontakte und die API-Setups für die Aufgaben umzusetzen',
      technologies: 'HTML, CSS, JavaScript, Firebase, GIT',
      learning: 'a lot',
      image: '../../assets/img/join.png',
      github: 'https://github.com/SebastianRegending/join.git',
      test: 'https://join-327.developerakademie.net/login.html'
    },
    {
      number: 2,
      id: 1,
      name: 'El Pollo Loco',
      about: "El Pollo Loco is a Jump'n Run Game written with JavaScript. I used OOP to create the different objects in the game",
      ueber: "El Pollo Loco ist ein mit JavaScript geschriebenes Jump'n Run-Spiel. Ich habe OOP verwendet, um die verschiedenen Objekte im Spiel zu erstellen",
      technologies: 'HTML, CSS, JavaScript',
      learning: 'OOP',
      image: '../../assets/img/polloloco.png',
      github: 'https://github.com/Hawkating/elpolloloco',
      test: 'https://jan-bruchwalski.developerakademie.net/El%20Pollo%20Loco/index.html'
    },
    {
      number: 3,
      id: 2,
      name: 'DaBubble',
      about: 'The next project will be DaBubble, I am very exited to see how it will be',
      ueber: 'Das nächste Projekt wird DaBubble sein, ich bin sehr gespannt, wie es sein wird',
      technologies: 'Angular, Typescript, SCSS',
      learning: 'OOP',
      image: '../../assets/img/tba.jpg',
      github: '',
      test: ''
    },
    {
      number: 1,
      id: 3,
      name: 'Join',
      about: 'Join was a team-project. My part was to implement the contacts and the API-Setups for the tasks',
      ueber: 'Join war ein Teamprojekt. Meine Aufgabe bestand darin, die Kontakte und die API-Setups für die Aufgaben umzusetzen',
      technologies: 'HTML, CSS, JavaScript, Firebase, GIT',
      learning: 'a lot',
      image: '../../assets/img/join.png',
      github: 'https://github.com/SebastianRegending/join.git',
      test: 'https://join-327.developerakademie.net/login.html'
    },
  ];

  @Input() indexOfItem: number = 0;

  @Output() showMore = new EventEmitter;

  item: Card = this.contentForCard[this.indexOfItem];

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  /**
   * Observes changes to set up the right card
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['indexOfItem'] && this.indexOfItem >= 0 && this.indexOfItem < this.contentForCard.length) {
      this.item = this.contentForCard[this.indexOfItem];
    }
  }

  /**
   * expands the responsive-card, that is clicked 
   * @param id 
   */
  emitShowMore(id: number) {
    this.closeAll(id);
    const element = document.getElementById(`card-show-${id}`);
    if (element?.innerHTML == "show me more") {
      document.getElementById(`card-full-${id}`)?.classList.add('show-large');
      if (element) {
        element.innerHTML = "show me less";
        document.getElementById(`card-arrow-${id}`)?.classList.add('rotate-arrow');
      }
    }
    else {
      document.getElementById(`card-full-${id}`)?.classList.remove('show-large');
      if (element) {
        element.innerHTML = "show me more";
        document.getElementById(`card-arrow-${id}`)?.classList.remove('rotate-arrow');
      }
    }
  }

  /**
   * closes all responsive cards
   * @param id 
   */
  closeAll(id: number) {
    for (let i = 0; i < this.contentForCard.length; i++) {
      if (i != id) {
        document.getElementById(`card-full-${i}`)?.classList.remove('show-large');
        const element = document.getElementById(`card-show-${i}`);
        if (element?.innerHTML == "show me less") {
          element.innerHTML = "show me more";
          document.getElementById(`card-arrow-${i}`)?.classList.remove('rotate-arrow');
        }
      }
    }
  }

}