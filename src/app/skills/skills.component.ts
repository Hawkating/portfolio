import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() set animationObserver(value: string) {
    if (value == 'skills') {
      this.observeAnimation();
    } else {
      this.observeAnimationDelete();
    }
  }
  constructor() {
  }

  @Output()showPage = new EventEmitter();

  emitShowPage(){
   this.showPage.emit(this.navigateTo);
  }

  observeAnimation(){
    const elements = Array.from(document.getElementsByClassName('single-skill'));

    elements.forEach((element) => {
        element.classList.add('start-animation');
    });
  }

  observeAnimationDelete(){
    const elements = Array.from(document.getElementsByClassName('single-skill'));

    elements.forEach((element) => {
        element.classList.remove('start-animation');
    });
  }


}

class Skill {

  path: string = '';
  name: string = '';

}
