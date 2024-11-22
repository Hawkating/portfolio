import { Component, Output, EventEmitter } from '@angular/core';
import { RightBarComponent } from "../right-bar/right-bar.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RightBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  navigateTo: string = 'atf'

  @Output() showPage = new EventEmitter();

  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

}
