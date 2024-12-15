import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RightBarComponent } from "../right-bar/right-bar.component";
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RightBarComponent, FormsModule, ArrowComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  navigateTo: string = 'mywork'
  http = inject(HttpClient);

  contactData = {
    name: '',
    mail: '',
    message: '',
  }
  check = false;

  @Output() showPage = new EventEmitter();
  @Output() showDialog = new EventEmitter();

  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

  emitShowDialog(id:string) {
    this.showDialog.emit(id);
  }



  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}
