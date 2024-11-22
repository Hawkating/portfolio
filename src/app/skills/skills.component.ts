import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { ArrowComponent } from "../arrow/arrow.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ArrowComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsFrontend: Skill[] = [
    {
      path: '../../assets/skills/frontend/Angular.svg',
      name: 'Angular'
    },
    {
      path: '../../assets/skills/frontend/TypeScript.svg',
      name: 'TypeScript'
    },
    {
      path: '../../assets/skills/frontend/Javascript.svg',
      name: 'JavaScript'
    },
    {
      path: '../../assets/skills/frontend/html.svg',
      name: 'HTML'
    },
    {
      path: '../../assets/skills/frontend/css.svg',
      name: 'CSS'
    },
    {
      path: '../../assets/skills/frontend/Api.svg',
      name: 'Rest-API'
    },
    {
      path: '../../assets/skills/frontend/Firebase.svg',
      name: 'Firebase'
    },
    {
      path: '../../assets/skills/frontend/git.svg',
      name: 'GIT'
    },
    {
      path: '../../assets/skills/frontend/scrum.svg',
      name: 'Scrum'
    },
    {
      path: '../../assets/skills/frontend/materialdesign.svg',
      name: 'Material Design'
    },
  ];
  navigateTo:string = 'mywork';

  constructor() {
  }

  @Output()showPage = new EventEmitter();

  emitShowPage(){
   this.showPage.emit(this.navigateTo);
  }



}

class Skill {

  path: string = '';
  name: string = '';

}
