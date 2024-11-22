import { Component, Input, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.scss'
})
export class ProjectcardComponent {

  contentForCard: Card[] = [
    {
      number: 1,
      name: 'Join',
      about: 'blablatest',
      technologies: 'HTML, CSS, JavaScript, Firebase, GIT',
      learning: 'asfafsdcvklö dfkjdsöfjäfd sdfkävköskvlsdv yxcvvasdddddddddddddddddddddddd dddddddddddddddddddddddddddddddddd sdfdsfsdfsdfsdf sdfsadfcvsdv',
      image: '',
      github: 'http://www.google.de',
      test: 'https://join-327.developerakademie.net/login.html'
    },
    {
      number: 2,
      name: 'El Pollo Loco',
      about: 'blablapollo',
      technologies: 'HTML, CSS, JavaScript',
      learning: 'OOP',
      image: '',
      github: '',
      test: ''
    },
    {
      number: 3,
      name: 'Testprojekt',
      about: 'blablapoasldkjajklsfckllo',
      technologies: 'HTML, CSS, JavaScript',
      learning: 'OOP',
      image: '',
      github: '',
      test: ''
    },
  ];
  @Input()indexOfItem:number = 0;
  item: Card = this.contentForCard[this.indexOfItem];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['indexOfItem'] && this.indexOfItem >= 0 && this.indexOfItem < this.contentForCard.length) {
      this.item = this.contentForCard[this.indexOfItem];
    }

}
}

class Card {
  number: number = 0;
  name: string = '';
  about: string = '';
  technologies: string = '';
  learning: string = '';
  image: string = '';
  github: string = '';
  test: string = '';
}
