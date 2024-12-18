import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent {
  @Output() closeDialog = new EventEmitter;

  /**
   * emits the close-Dialog Event for privacy policy-dialog
   */
  emitCloseDialog(){
    this.closeDialog.emit('privacy-policy');
  }

}
