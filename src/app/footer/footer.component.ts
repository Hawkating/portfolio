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

  /**
 * emits the showDialog-Event to open the dialog (legal notice or privacy policy)
 * @param id id for legal notice or privacy policy
 */
  emitShowDialog(id: string) {
    this.showDialog.emit(id);
  }

  /**
 * emits the goToContact-Event to navigate back to the last component (contact)
 */
  emitGoToContact() {
    this.goToContact.emit();
  }
  
}
