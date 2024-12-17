import { Component, Output, EventEmitter } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialsComponent, ArrowComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() showDialog = new EventEmitter();
  @Output() goToContact = new EventEmitter();


  emitShowDialog(id:string) {
    this.showDialog.emit(id);
  }

  emitGoToContact(){
    this.goToContact.emit();
  }
}
