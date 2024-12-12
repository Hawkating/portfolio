import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from "../arrow/arrow.component";
import { ProjectcardPreviewComponent } from '../projectcard-preview/projectcard-preview.component';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectcardComponent, CommonModule, ArrowComponent, ProjectcardPreviewComponent],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent {
  @Input() set animationObserver(value: string) {
    if (value == 'mywork') {
      this.observeAnimation();
      console.log("drinne")
    } else {
      this.observeAnimationDelete();
    }
  }
  navigateTo = 'contact';
  projectIndex = 0;

  @Output()showPage = new EventEmitter();

  emitShowPage(){
   this.showPage.emit(this.navigateTo);
  }

  
observeAnimation(){
  document.getElementById('project-container')?.classList.add('start-animation');
  }
  
  observeAnimationDelete(){
    document.getElementById('project-container')?.classList.remove('start-animation');
  }

}