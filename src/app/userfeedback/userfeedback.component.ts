import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userfeedback',
  standalone: true,
  imports: [],
  templateUrl: './userfeedback.component.html',
  styleUrl: './userfeedback.component.scss'
})
export class UserfeedbackComponent {
  @Output() closeDialog = new EventEmitter;

  emitCloseDialog(){
    this.closeDialog.emit('userfeedback');
  }

}
