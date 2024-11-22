import { Component, Output, EventEmitter } from '@angular/core';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from "../arrow/arrow.component";

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectcardComponent, CommonModule, ArrowComponent],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent {
  navigateTo = 'contact';
  projectIndex = 1;

  @Output()showPage = new EventEmitter();

  emitShowPage(){
   this.showPage.emit(this.navigateTo);
  }

}