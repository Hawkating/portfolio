import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard-preview',
  standalone: true,
  imports: [],
  templateUrl: './projectcard-preview.component.html',
  styleUrl: './projectcard-preview.component.scss'
})

export class ProjectcardPreviewComponent {
  @Input()projectname:string = '';
  @Input()projectpath:string = '';
    
}
