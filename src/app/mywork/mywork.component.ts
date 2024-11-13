import { Component } from '@angular/core';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectcardComponent, CommonModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent {

}