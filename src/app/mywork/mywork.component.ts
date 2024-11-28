import { Component, Output, EventEmitter } from '@angular/core';
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
  navigateTo = 'contact';
  projectIndex = 0;

  @Output()showPage = new EventEmitter();

  emitShowPage(){
   this.showPage.emit(this.navigateTo);
  }

}