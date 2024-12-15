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

  emitCloseDialog(){
    this.closeDialog.emit('privacy-policy');
  }

}
