import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  @Output() closeDialog = new EventEmitter;

  emitCloseDialog(){
    this.closeDialog.emit('legal-notice');
  }

}
