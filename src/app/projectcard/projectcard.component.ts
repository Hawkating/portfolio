import { Component } from '@angular/core';

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
    // {
    //   number: 1,
    //   name: 'Join',
    //   about: 'blablatest',
    //   technologies: '',
    //   learning: '',
    //   image: '',
    //   github: '',
    //   test: ''
    // },
  ];


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
